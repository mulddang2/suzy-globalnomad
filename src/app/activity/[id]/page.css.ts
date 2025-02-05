import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const detailPageContainer = style({
  width: '100%',
  margin: '0 auto',
});

export const detailPageBox = style({
  width: '62.5%',
  border: '1px solid #000',
  margin: '0 auto',
  marginTop: '78px',
});

export const detailTitle = style([
  fontSizes.text3xl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const ratingLocationLayout = style({
  display: 'flex',
  gap: '12px',
});

export const activityImageLayout = style({
  display: 'grid',
  // width: '100%',
  height: '534px',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
});

export const bannerImageBox = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const subImageBox = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '8px',
});

export const subImageWrapper = style({
  width: '100%',
  height: '100%',
  position: 'relative',
});

export const locationLayout = style({
  gap: '2px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  color: global.color.nomadBlack,
});

export const detailCategory = style({
  color: global.color.nomadBlack,
});

export const locationBox = style({
  display: 'grid',
  placeItems: 'center' /* 가로, 세로 중앙 정렬 */,
  width: '18px',
  height: '18px',
});
