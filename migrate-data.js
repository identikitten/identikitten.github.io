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
  
  console.log('Data.js content loaded');
  
  // Step 3: Create a temporary JS file that we can safely require
  const tempJs = `
  // Temporary file to extract data
  const data = ${dataJsContent.replace('const galleryData =', '')};
  module.exports = data;
  `;
  
  const tempFilePath = path.join(__dirname, '_temp_extract.js');
  fs.writeFileSync(tempFilePath, tempJs);
  
  // Step 4: Attempt to require the file
  let galleryData;
  try {
    galleryData = require('./_temp_extract.js');
    console.log(`Successfully extracted gallery data with ${galleryData.length} items`);
  } catch (error) {
    console.error('Error requiring gallery data:', error);
    fs.unlinkSync(tempFilePath); // Clean up the temp file
    return;
  }
  
  // Clean up the temp file
  fs.unlinkSync(tempFilePath);
  
  if (!Array.isArray(galleryData)) {
    console.error('Gallery data is not an array');
    return;
  }
  
  // Step 5: Create the _gallery directory if it doesn't exist
  const galleryDir = path.join(__dirname, '_gallery');
  ensureDirectoryExists(galleryDir);
  
  // Step 6: Create a markdown file for each gallery item
  galleryData.forEach((item, index) => {
    try {
      // Check for required fields
      if (!item.id) {
        item.id = `gallery-item-${index}`;
      }
      
      // Create images array if it doesn't exist
      const images = Array.isArray(item.images) ? item.images : [item.thumbnail || ''];
      
      const frontmatter = `---
id: ${item.id}
title: ${escapeFrontmatterValue(item.title || 'Untitled')}
year: ${item.year || new Date().getFullYear()}
category: ${item.category || 'art'}
thumbnail: ${item.thumbnail || ''}
images: ${JSON.stringify(images)}
symbols: ${JSON.stringify(item.symbols || '')}
decoration: ${JSON.stringify(item.decoration || '')}
---
${item.description || ''}
`;

      const fileName = `${item.id}.md`;
      const filePath = path.join(galleryDir, fileName);
      fs.writeFileSync(filePath, frontmatter);
      console.log(`Created gallery file: ${fileName}`);
    } catch (itemError) {
      console.error(`Error processing item #${index}:`, itemError);
    }
  });
  
  console.log(`Converted ${galleryData.length} gallery items to markdown files.`);
}

// Helper function to escape values for YAML frontmatter
function escapeFrontmatterValue(value) {
  if (!value) return '';
  return JSON.stringify(value);
}

// Run the migration
console.log('Starting data migration...');
convertGalleryData();
console.log('Migration completed!');