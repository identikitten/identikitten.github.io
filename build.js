const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

console.log('Starting build process...');
console.log('Current directory:', __dirname);
console.log('Directory contents:', fs.readdirSync(__dirname));

// Build gallery data
function buildGalleryData() {
    const galleryDir = path.join(__dirname, '_gallery');
    
    console.log('Gallery directory path:', galleryDir);
    console.log('Gallery directory exists:', fs.existsSync(galleryDir));
    
    if (fs.existsSync(galleryDir)) {
      console.log('Gallery directory contents:', fs.readdirSync(galleryDir));
    }
    
    if (!fs.existsSync(galleryDir)) {
      console.log('Gallery directory not found. Creating one...');
      fs.mkdirSync(galleryDir, { recursive: true });
      return [];
    }
    
    const galleryFiles = fs.readdirSync(galleryDir).filter(file => file.endsWith('.md') || file.endsWith('.markdown'));
    
    // Process each gallery file and create data objects
    const galleryData = galleryFiles.map(filename => {
        const filePath = path.join(galleryDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        // Convert markdown content to HTML
        const rawDescription = data.description || content;
        const rawDescriptionEs = data.description_es || '';
        
        // Check if content is already HTML (starts with < tag), otherwise convert from markdown
        const description = rawDescription.trim().startsWith('<') 
          ? rawDescription 
          : marked(rawDescription);
        const description_es = rawDescriptionEs.trim().startsWith('<') 
          ? rawDescriptionEs 
          : (rawDescriptionEs ? marked(rawDescriptionEs) : '');

        // Normalize image paths (handle both plain strings and CMS object format)
        function normalizeImagePath(img) {
          let p = typeof img === 'string' ? img : (img.image || img.src || '');
          // Remove leading slash if present for consistency
          if (p.startsWith('/')) p = p.substring(1);
          return p;
        }

        const thumbnail = normalizeImagePath(data.thumbnail || '');
        
        let imagesList = data.images || [data.thumbnail];
        if (Array.isArray(imagesList)) {
          imagesList = imagesList.map(normalizeImagePath).filter(Boolean);
        } else {
          imagesList = thumbnail ? [thumbnail] : [];
        }

        return {
          id: data.id,
          title: data.title,
          title_es: data.title_es || data.title,
          year: data.year,
          category: data.category,
          symbols: data.symbols || '',
          thumbnail: thumbnail,
          images: imagesList,
          decoration: data.decoration || '',
          description: description,
          description_es: description_es
        };
    });
    
    // Sort by year, newest first
    galleryData.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
    
    return galleryData;
}

// Build blog data function
function buildBlogData() {
    const blogDir = path.join(__dirname, '_blog');
    
    if (!fs.existsSync(blogDir)) {
      console.log('Blog directory not found. Creating one...');
      fs.mkdirSync(blogDir, { recursive: true });
      return [];
    }
    
    const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.markdown'));
    
    const blogData = blogFiles.map(filename => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        id: data.id,
        title: data.title,
        date: data.date,
        language: data.language || 'en', // Default to English if not specified
        thumbnail: data.thumbnail || '',
        content: data.content || content
      };
    });
    
    return blogData;
}

// Generate data.js file
function generateDataJs(galleryData) {
    const dataJsContent = `window.galleryData = ${JSON.stringify(galleryData, null, 2)};`;
    fs.writeFileSync(path.join(__dirname, 'data.js'), dataJsContent);
    console.log('Generated data.js with gallery items');
    
    // Log details about translations for debugging
    const itemsWithTitleEs = galleryData.filter(item => item.title_es).length;
    const itemsWithDescEs = galleryData.filter(item => item.description_es).length;
    console.log(`Found ${itemsWithTitleEs} items with Spanish titles`);
    console.log(`Found ${itemsWithDescEs} items with Spanish descriptions`);
    
    if (itemsWithTitleEs > 0) {
        const sample = galleryData.find(item => item.title_es);
        console.log(`Sample translation: "${sample.title}" → "${sample.title_es}"`);
    }
}

function normalizePublicPath(p) {
  if (!p || typeof p !== 'string') return p;
  return p.startsWith('/') ? p.substring(1) : p;
}

function normalizeEdenBlocks(data) {
  const blocks = Array.isArray(data.blocks) ? data.blocks : [];
  const normalized = blocks.map((block) => {
    const t = block.type;
    const nested = t && block[t];
    if (nested && typeof nested === 'object' && nested.src) {
      nested.src = normalizePublicPath(nested.src);
    }
    if (nested && typeof nested === 'object' && nested.url && typeof nested.url === 'string' && !/^https?:\/\//i.test(nested.url)) {
      nested.url = normalizePublicPath(nested.url);
    }
    return block;
  });
  return { blocks: normalized };
}

function buildEdenData() {
  const edenPath = path.join(__dirname, '_eden', 'eden-blocks.json');
  if (!fs.existsSync(edenPath)) {
    console.log('EDEN blocks file not found, using empty blocks');
    return { blocks: [] };
  }
  try {
    const raw = fs.readFileSync(edenPath, 'utf8');
    const parsed = JSON.parse(raw);
    return normalizeEdenBlocks(parsed);
  } catch (e) {
    console.error('Failed to read _eden/eden-blocks.json:', e.message);
    return { blocks: [] };
  }
}

function generateEdenDataJs(edenData) {
  const content = `window.edenBlocks = ${JSON.stringify(edenData, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, 'eden-data.js'), content);
  console.log('Generated eden-data.js from _eden/eden-blocks.json');
}

// Generate blog.js file
function generateBlogJs(blogData) {
    const blogJsContent = `window.blogData = ${JSON.stringify(blogData, null, 2)};`;
    fs.writeFileSync(path.join(__dirname, 'blog.js'), blogJsContent);
    console.log('Generated blog.js with blog posts');
}

// Translation dictionary
function generateTranslationDictionary(galleryData) {
    // Create translation dictionaries
    const enProjects = {};
    const esProjects = {};
    
    galleryData.forEach(item => {
      // English content (always present)
      enProjects[item.id] = {
        title: item.title,
        description: item.description
      };
      
      // Spanish content (if available)
      if (item.title_es || item.description_es) {
        esProjects[item.id] = {
          title: item.title_es || item.title, // Fall back to English if not translated
          description: item.description_es || item.description // Fall back to English if not translated
        };
      }
    });
    
    return {
      en: { projects: enProjects },
      es: { projects: esProjects }
    };
}

// Run the build process
const galleryData = buildGalleryData();
const blogData = buildBlogData();
const edenData = buildEdenData();

// Generate project translations
const projectTranslations = generateTranslationDictionary(galleryData);

// Write to a translations.json file
fs.writeFileSync(
  path.join(__dirname, 'project-translations.json'), 
  JSON.stringify(projectTranslations, null, 2)
);
console.log('Generated project-translations.json');

generateDataJs(galleryData);
generateBlogJs(blogData);
generateEdenDataJs(edenData);

console.log('Build completed successfully!');