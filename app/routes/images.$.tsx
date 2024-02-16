import { type LoaderFunctionArgs } from '@remix-run/node';
import sharp from 'sharp';
import path from 'path';
import { z } from 'zod';
import { getSearchParams } from 'remix-params-helper';
import { fileTypeFromBuffer } from 'file-type';

const SearchParamsSchema = z.object({
  q: z.string().optional(),
  w: z.string().optional(),
  h: z.string().optional(),
  output: z.enum(['avif', 'webp', 'jpeg', 'png']).optional()
});

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const imagePath = params['*'];
  if (!imagePath) {
    return { status: 404 };
  }

  let quality = 75;
  let imageType;
  let width;
  let height;

  const result = getSearchParams(request, SearchParamsSchema);
  if (result.success) {
    const { q, w, h, output } = result.data;
    if (q) {
      quality = parseInt(q);
    }
    if (output) {
      imageType = output;
    }
    if (w) {
      width = parseInt(w);
    }
    if (h) {
      height = parseInt(h);
    }
  }

  const absoluteImagePath = path.join(process.cwd(), 'public', imagePath);

  const image = sharp(absoluteImagePath)
    .webp({ quality, force: imageType === 'webp' })
    .avif({ quality, force: imageType === 'avif' })
    .jpeg({ quality, force: imageType === 'jpeg' })
    .png({ quality, force: imageType === 'png' });

  if (width) image.resize({ width });
  if (height) image.resize({ height });

  const imageBuffer = await image.toBuffer();

  const fileType = await fileTypeFromBuffer(imageBuffer);

  return new Response(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': fileType?.mime || 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, s-max-age=31536000, immutable'
    }
  });
};
