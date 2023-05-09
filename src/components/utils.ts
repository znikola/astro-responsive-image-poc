import type { GetImageResult } from 'astro';

export function buildSrcSet(images: GetImageResult[]) {
  return images
    .map(
      (image) => `${image.src} ${(image.options.src as ImageMetadata).width}w`
    )
    .join(',');
}
