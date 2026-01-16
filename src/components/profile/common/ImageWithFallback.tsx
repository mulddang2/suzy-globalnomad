import Image from 'next/image';
import { useState } from 'react';

const DEFAULT_PROFILE_IMG_URL = '/images/fallback-image.png';

interface ImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
  priority?: boolean;
  quality?: number;
  hideOnError?: boolean;
  onError?: () => void;
}

export default function ImageWithFallback({
  alt,
  src,
  height,
  width,
  fill,
  sizes,
  className,
  fetchPriority,
  priority,
  quality,
  onError,
  hideOnError = false,
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isError, setIsError] = useState(false);

  if (hideOnError && isError) {
    return null;
  }

  return (
    <Image
      alt={alt}
      src={imgSrc}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      className={className}
      fetchPriority={fetchPriority}
      priority={priority}
      quality={quality}
      onError={() => {
        setImgSrc(DEFAULT_PROFILE_IMG_URL);
        setIsError(true);
        if (onError) {
          onError();
        }
      }}
    />
  );
}
