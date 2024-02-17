import { transformProps, type UnpicImageProps } from '@unpic/core';
import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from 'react';

import { cn, filteredSearchParams } from '~/utils';

const nestedKeys = new Set(['style']);
const fixedMap: Record<string, string> = { srcset: 'srcSet' };
const camelize = (key: string) => {
  if (key.startsWith('data-') || key.startsWith('aria-')) {
    return key;
  }
  return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};

const camelizeProps = <TObject extends HTMLAttributes<HTMLElement>>(props: TObject): TObject => {
  return Object.fromEntries(
    Object.entries(props).map(([k, v]) => [
      camelize(k),
      nestedKeys.has(k) && v && typeof v !== 'string' ? camelizeProps(v) : v
    ])
  ) as TObject;
};

type ImageProps = UnpicImageProps<ImgHTMLAttributes<HTMLImageElement>>;
const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { alt, src, srcSet, ...camelizedProps } = camelizeProps(transformProps(props));
  if (src?.includes('.svg') || src?.includes('.gif')) {
    return <img {...camelizedProps} src={src?.replace('&output=auto', '')} alt={alt} ref={ref} />;
  }

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet?.replace(/&output=auto/gi, '&output=avif')} />
      <source type="image/webp" srcSet={srcSet?.replace(/&output=auto/gi, '&output=webp')} />
      <source srcSet={srcSet?.replace(/&output=auto/gi, '')} />
      <img {...camelizedProps} src={src?.replace('&output=auto', '')} alt={alt} ref={ref} />
    </picture>
  );
});
Image.displayName = 'Image';

const DEFAULT_RESOLUTIONS = [
  // 1920, // 1080p
  // 1668, // Various iPads
  1280, // 720p
  1080, // iPhone 6-8 Plus
  828, // iPhone XR/11
  750 // iPhone 6-8
];

export const OptimizedImage = ({
  className,
  quality = 85,
  breakpoints = DEFAULT_RESOLUTIONS,
  ...props
}: ImageProps & { quality?: number; breakpoints?: number[] }) => {
  return (
    <Image
      {...props}
      breakpoints={breakpoints}
      transformer={({ url, width, height }) =>
        `/images/${url}?${filteredSearchParams({ q: quality, w: width, h: height, output: 'auto' })}`
      }
      className={cn(className)}
    />
  );
};
