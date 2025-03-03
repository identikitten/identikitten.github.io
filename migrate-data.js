const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
}

// Convert gallery data to markdown files
function convertGalleryData() {
  // Step 1: Read the data.js file content
  const dataJsPath = path.join(__dirname, 'data.js');
  if (!fs.existsSync(dataJsPath)) {
    console.error('data.js file not found!');
    return;
  }

  // Step 2: Read the file content
  const dataJsContent = fs.readFileSync(dataJsPath, 'utf8');
  
  // Step 3: Extract the array from the file
  // This matches everything between [ and the last ]
  const arrayMatch = dataJsContent.match(/\[([\s\S]*)\]/);
  if (!arrayMatch) {
    console.error('Could not extract array from data.js');
    return;
  }
  
  // Step 4: Parse the array
  let galleryData;
  try {
    // We reconstruct a valid JSON string
    const jsonString = `[${arrayMatch[1]}]`;
    galleryData = JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse gallery data:', error);
    return;
  }
  
  // Step 5: Create the _gallery directory if it doesn't exist
  const galleryDir = path.join(__dirname, '_gallery');
  ensureDirectoryExists(galleryDir);
  
  // Step 6: Create a markdown file for each gallery item
  galleryData.forEach(item => {
    const frontmatter = `---
id: ${item.id}
title: ${escapeFrontmatterValue(item.title)}
year: ${item.year}
category: ${item.category}
thumbnail: ${item.thumbnail}
images:
${item.images.map(img => `  - ${img}`).join('\n')}
symbols: |
${indentMultilineValue(item.symbols)}
decoration: |
${indentMultilineValue(item.decoration)}
---
${item.description}
`;

    const fileName = `${item.id}.md`;
    const filePath = path.join(galleryDir, fileName);
    fs.writeFileSync(filePath, frontmatter);
    console.log(`Created gallery file: ${fileName}`);
  });
  
  console.log(`Converted ${galleryData.length} gallery items to markdown files.`);
}

// Convert blog data to markdown files (if you have any)
function convertBlogData() {
  // Step 1: Check if blog.js exists
  const blogJsPath = path.join(__dirname, 'blog.js');
  if (!fs.existsSync(blogJsPath)) {
    console.log('blog.js file not found. Skipping blog conversion.');
    return;
  }

  // Step 2: Read the file content
  const blogJsContent = fs.readFileSync(blogJsPath, 'utf8');
  
  // Step 3: Extract the array from the file
  const arrayMatch = blogJsContent.match(/\[([\s\S]*)\]/);
  if (!arrayMatch) {
    console.error('Could not extract array from blog.js');
    return;
  }
  
  // Step 4: Parse the array
  let blogData;
  try {
    const jsonString = `[${arrayMatch[1]}]`;
    blogData = JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse blog data:', error);
    return;
  }
  
  // Step 5: Create the _blog directory if it doesn't exist
  const blogDir = path.join(__dirname, '_blog');
  ensureDirectoryExists(blogDir);
  
  // Step 6: Create a markdown file for each blog post
  blogData.forEach(post => {
    const frontmatter = `---
id: ${post.id}
title: ${escapeFrontmatterValue(post.title)}
date: ${new Date(post.date).toISOString()}
thumbnail: ${post.thumbnail || ''}
---
${post.content}
`;

    const fileName = `${post.id}.md`;
    const filePath = path.join(blogDir, fileName);
    fs.writeFileSync(filePath, frontmatter);
    console.log(`Created blog file: ${fileName}`);
  });
  
  console.log(`Converted ${blogData.length} blog posts to markdown files.`);
}

// Helper function to escape values for YAML frontmatter
function escapeFrontmatterValue(value) {
  if (!value) return '';
  // If the value contains special characters, wrap it in quotes
  if (value.includes(':') || value.includes('#') || value.includes('\'') || value.includes('"')) {
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  return value;
}

// Helper function to indent multiline values for YAML
function indentMultilineValue(value) {
  if (!value) return '  ';
  return value.split('\n').map(line => `  ${line}`).join('\n');
}

// Run the migration
console.log('Starting data migration...');
convertGalleryData();
convertBlogData();
console.log('Migration completed!');