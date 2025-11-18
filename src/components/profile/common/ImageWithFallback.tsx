import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_PROFILE_IMG_URL = '/images/default-ready-image.webp';

interface ImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
}

export default function ImageWithFallback({ alt, src, height, width, fill, sizes, className }: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setImgSrc(DEFAULT_PROFILE_IMG_URL)}
    />
  );
}
