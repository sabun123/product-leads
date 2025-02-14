const sharp = require('sharp');

async function generateFavicon() {
  try {
    await sharp('public/icon.svg')
      .resize(32, 32)
      .toFile('public/favicon.ico');
    
    // Also create a copy in the app directory
    await sharp('public/icon.svg')
      .resize(32, 32)
      .toFile('app/favicon.ico');
      
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();