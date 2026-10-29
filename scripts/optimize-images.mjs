// Generates optimized avatar images from public/me.jpg (run: node scripts/optimize-images.mjs)
import sharp from "sharp";

const src = "public/me.jpg";
for (const size of [160, 320]) {
  await sharp(src)
    .extract({ left: 215, top: 200, width: 440, height: 440 })
    .resize(size, size)
    .webp({ quality: 82 })
    .toFile(`public/avatar-${size}.webp`);
}
await sharp(src).resize(480, 640, { fit: "cover" }).webp({ quality: 80 }).toFile("public/me.webp");
console.log("done");
