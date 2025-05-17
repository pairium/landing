const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

// Path to the SVG icon (adjusted for scripts folder)
const svgPath = path.join(__dirname, '..', 'public', 'icon.svg');

// Where to save the favicon.ico (adjusted for scripts folder)
const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');

// Convert SVG to PNG images of different sizes
async function convertSvgToIco() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert to PNGs of different sizes
    const pngBuffers = await Promise.all([16, 32, 48, 64].map(size => {
      return sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
    }));
    
    // Convert PNGs to ICO
    const icoBuffer = await toIco(pngBuffers);
    
    // Write ICO file
    fs.writeFileSync(outputPath, icoBuffer);
    
    console.log('Favicon created successfully at', outputPath);
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

convertSvgToIco(); 