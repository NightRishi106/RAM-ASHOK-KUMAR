const { Jimp } = require("jimp");

async function main() {
    console.log("Loading image...");
    const image = await Jimp.read("public/yantra.jpg");
    console.log("Image loaded.");
    
    image.scan((x, y, idx) => {
        const r = image.bitmap.data[idx + 0];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];
        
        // Check if color is close to white
        // We'll define a tolerance
        const tolerance = 60;
        if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
            image.bitmap.data[idx + 3] = 0; // Set alpha to 0
        } else {
            // For the non-white pixels (the golden lines), we might want to make sure they stand out
            // Let's just keep their original color but make sure alpha is 255
            image.bitmap.data[idx + 3] = 255;
        }
    });
    
    console.log("Saving image...");
    await image.write("public/yantra_transparent.png");
    console.log("Done.");
}

main().catch(console.error);
