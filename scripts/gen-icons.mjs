import { ImageResponse } from 'next/og.js';
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function monogram(size) {
  const fontSize = Math.round(size * 0.5);
  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
        },
        children: {
          type: 'div',
          props: {
            style: {
              fontSize,
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              letterSpacing: '-0.02em',
            },
            children: 'IA',
          },
        },
      },
    },
    { width: size, height: size }
  );
}

async function savePng(size, filePath) {
  const res = monogram(size);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(filePath, buf);
  console.log('wrote', filePath, buf.length, 'bytes');
  return buf;
}

async function main() {
  await mkdir(path.join(root, 'public'), { recursive: true });

  await savePng(192, path.join(root, 'public', 'icon-192.png'));
  await savePng(512, path.join(root, 'public', 'icon-512.png'));
  await savePng(512, path.join(root, 'src', 'app', 'icon.png'));
  const appleBuf = await savePng(180, path.join(root, 'src', 'app', 'apple-icon.png'));

  const icon32 = await savePng(32, path.join(root, 'public', '__icon32.png'));
  const icon16 = await savePng(16, path.join(root, 'public', '__icon16.png'));
  await savePng(48, path.join(root, 'public', '__icon48.png'));
  const icoBuf = await pngToIco([
    path.join(root, 'public', '__icon16.png'),
    path.join(root, 'public', '__icon32.png'),
    path.join(root, 'public', '__icon48.png'),
  ]);
  await writeFile(path.join(root, 'src', 'app', 'favicon.ico'), icoBuf);
  console.log('wrote favicon.ico', icoBuf.length, 'bytes');

  await import('node:fs/promises').then(fs => Promise.all([
    fs.rm(path.join(root, 'public', '__icon32.png')),
    fs.rm(path.join(root, 'public', '__icon16.png')),
    fs.rm(path.join(root, 'public', '__icon48.png')),
  ]));

  void appleBuf; void icon32; void icon16;
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
