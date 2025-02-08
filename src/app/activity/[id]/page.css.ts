import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const detailPageContainer = style({
  width: '100%',
  margin: '0 auto',
});

export const detailPageBox = style({
  width: '62.5%',
  margin: '0 auto',
  marginTop: '78px',
});

export const detailTitle = style([
  fontSizes.text3xl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
    marginTop: '10px',
    marginBottom: '16px',
  },
]);

export const ratingLocationLayout = style({
  display: 'flex',
  gap: '12px',
});

export const activityImageLayout = style({
  display: 'grid',
  margin: '25px 0 85px',
  height: '534px',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const descLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '34px',
  marginTop: '40px',
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

export const horizontalLine = style({
  width: '100%',
  height: '1px',
  borderTop: `1px solid ${global.color.nomadBlack}`,
});

export const subheading = style({
  fontSize: '20px',
  color: global.color.nomadBlack,
  fontWeight: 'bold',
});

export const paragraph = style([
  fontSizes.textLg,
  fontWeights.regular,
  {
    color: global.color.nomadBlack,
  },
]);

export const mapLocationLayout = style({
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  marginBottom: '40px',
});

export const mapContainer = style({
  marginTop: '40px',
  borderRadius: '16px',
  overflow: 'hidden',
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
