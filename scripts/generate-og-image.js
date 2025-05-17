const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the SVG icon
const svgPath = path.join(__dirname, '..', 'public', 'icon.svg');

// Where to save the og-image.png
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

// Configure the size for Open Graph image (recommended 1200x1200 or 1200x630)
const OG_WIDTH = 1200;
const OG_HEIGHT = 1200;

async function generateOgImage() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert to high-res PNG with a black background
    await sharp(svgBuffer)
      .resize(OG_WIDTH, OG_HEIGHT)
      .png()
      .toFile(outputPath);
    
    console.log('OG image created successfully at', outputPath);
  } catch (error) {
    console.error('Error creating OG image:', error);
  }
}

generateOgImage(); 