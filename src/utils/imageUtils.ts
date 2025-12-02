const CDN_BASE = process.env.NEXT_PUBLIC_IMAGE_CDN_BASE!;
const ORIGINAL_BASE = 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/globalnomad/';

export const convertToCdnUrl = (originalUrl: string): string => {
  if (process.env.NODE_ENV === 'production') {
    return originalUrl.replace(ORIGINAL_BASE, `${CDN_BASE}/tr:f-auto/`);
  } else {
    return originalUrl;
  }
};
