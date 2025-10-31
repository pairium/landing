const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const svgPath = path.join(__dirname, "..", "src", "assets", "icon.svg");
const outputPath = path.join(__dirname, "..", "src", "assets", "og-image.png");

const OG_WIDTH = 1200;
const OG_HEIGHT = 1200;

async function generateOgImage() {
  try {
    const svgBuffer = fs.readFileSync(svgPath);

    await sharp(svgBuffer)
      .resize(OG_WIDTH, OG_HEIGHT)
      .png()
      .toFile(outputPath);

    console.log("OG image created successfully at", outputPath);
  } catch (error) {
    console.error("Error creating OG image:", error);
  }
}

generateOgImage();

