import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const TARGET_DIRS = [
  'src/assets/images',
  'src/assets/icons',
  'src/assets/logo',
].map((p) => path.join(ROOT, p));

const SOURCE_EXTS = new Set(['.png', '.jpg', '.jpeg']);

async function walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const out = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function main() {
  const allFiles = (await Promise.all(TARGET_DIRS.map(walk))).flat();
  const images = allFiles.filter((f) => SOURCE_EXTS.has(path.extname(f).toLowerCase()));

  let converted = 0;
  let skipped = 0;

  for (const src of images) {
    const dst = src.replace(/\.(png|jpe?g)$/i, '.webp');
    try {
      const [srcStat, dstStat] = await Promise.all([
        fs.stat(src),
        fs.stat(dst).catch(() => null),
      ]);

      if (dstStat && dstStat.mtimeMs >= srcStat.mtimeMs) {
        skipped += 1;
        continue;
      }

      await sharp(src, { failOn: 'none' })
        .webp({
          quality: 80,
          effort: 5,
        })
        .toFile(dst);

      converted += 1;
    } catch (e) {
      console.error(`Failed to convert: ${path.relative(ROOT, src)}`);
      console.error(e);
      process.exitCode = 1;
    }
  }

  console.log(`Converted: ${converted}, skipped: ${skipped}`);
}

main();
