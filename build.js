const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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
    
    // Inside the buildGalleryData function
const galleryData = galleryFiles.map(filename => {
    const filePath = path.join(galleryDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      id: data.id,
      title: data.title,
      title_es: data.title_es || data.title, 
      year: data.year,
      category: data.category,
      symbols: data.symbols || '',
      thumbnail: data.thumbnail,
      images: data.images || [data.thumbnail],
      decoration: data.decoration || '',
      description: data.description || content,
      description_es: data.description_es || content 
    };
  });
    
    return galleryData;
}

// Build blog data
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

console.log('Build completed successfully!');