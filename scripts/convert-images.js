const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertImages() {
  const imageDir = path.join(process.cwd(), 'public', 'images');

  try {
    const files = await fs.readdir(imageDir);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(imageDir, file);
        const outputPath = path.join(imageDir, `${path.parse(file).name}.webp`);

        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        console.log(`Converted ${file} to WebP`);

        // If the file is a png, delete the original file after conversion
        if (file.match(/\.png$/i)) {
          await fs.unlink(inputPath);
          console.log(`Deleted original PNG file: ${file}`);
        }
      }
    }
  } catch (error) {
    console.error('Error converting images:', error);
    process.exit(1);
  }
}

convertImages();
