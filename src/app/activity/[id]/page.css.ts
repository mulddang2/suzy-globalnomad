import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const detailPageContainer = style({
  width: '100%',
  margin: '0 auto',
});

export const activityInfoLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const detailPageBox = style({
  width: '62.5%',
  margin: '0 auto',
  marginTop: '78px',
  marginBottom: '293px',

  '@media': {
    'screen and (max-width: 797px)': {
      width: '100%',
      padding: '0 24px',
      marginTop: '16px',
    },
  },
});

export const detailTitle = style([
  fontSizes.text3xl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
    marginTop: '10px',
    marginBottom: '16px',
    '@media': {
      'screen and (max-width: 767px)': {
        fontSize: '24px',

      },
    },
  },
]);

export const ratingLocationLayout = style({
  display: 'flex',
  gap: '12px',
  whiteSpace: 'noWrap',
});

export const activityImageLayout = style({
  display: 'grid',
  margin: '25px 0 85px',
  height: '534px',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  borderRadius: '12px',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 797px)': {
      marginLeft: '-24px',
      marginRight: '-24px',
      borderRadius: 0,
      gridTemplateColumns: '1fr',
    },
  },
});

export const activityImageFullLayout = style({
  display: 'grid',
  margin: '25px 0 85px',
  height: '534px',
  gridTemplateColumns: '1fr',
  gap: '8px',
  borderRadius: '12px',
  overflow: 'hidden',

  '@media': {
    'screen and (max-width: 797px)': {
      marginLeft: '-24px',
      marginRight: '-24px',
      borderRadius: 0,
    },
  },
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

export const bannerImage = style({
  objectFit: 'cover',
});

export const emptyImage = style({
  objectFit: 'contain',
  backgroundColor: '#fff',
  padding: '10%',

  '@media': {
    'screen and (max-width: 767px)': {
      padding: '20%',
    },
  },
});

export const subImage = style({
  objectFit: 'cover',
  backgroundColor: '#fff',
});

export const subImageBox = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gap: '8px',

  '@media': {
    'screen and (max-width: 767px)': {
      display: 'none',
    },
  },
});

export const horizontalLine = style({
  width: '100%',
  height: '1px',
  borderTop: `1px solid ${global.color.nomadBlack}`,
});

export const reviewCountLayout = style({
  marginTop: '40px',
  marginBottom: '24px',
});

export const subheading = style({
  fontSize: '20px',
  color: global.color.nomadBlack,
  fontWeight: 'bold',
});

export const ratingLayout = style({
  display: 'flex',
  gap: '16px',
  marginTop: '24px',
});

export const averageRating = style([
  {
    fontSize: '50px',
    color: global.color.nomadBlack,
  },
  fontWeights.semibold,
]);

export const averageRatingLayout = style({
  display: 'flex',
  color: global.color.nomadBlack,
  flexDirection: 'column',
  gap: '8px',
});

export const ratingReviewLayout = style([
  {
    display: 'flex',
    gap: '6px',
    alignItems: 'center',
    color: global.color.black,
  },
  fontSizes.textMd,
]);

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
  fontSize: '14px',
});

export const locationBox = style({
  display: 'grid',
  placeItems: 'center',
  width: '18px',
  height: '18px',
});

export const address = style({
  fontSize: '14px',
});

export const bodyContainer = style({
  display: 'flex',
  gap: '24px',
  marginTop: '40px',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width: 1199px)': {
      flexDirection: 'column',
    },
  },
});

export const mainContent = style({
  flex: 1,
  width: '100%',
  minWidth: 0,
});

export const sidebar = style({
  width: '384px',
  flexShrink: 0,
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '100%',
      marginTop: '24px',
      display: 'none',
    },
    'screen and (max-width: 767px)': {
      display: 'block',
      width: '100%',
    },
  },
});

export const sidebarLayout = style({
  width: '320px',
  flexShrink: 0,
  '@media': {
    'screen and (max-width: 1199px)': {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      zIndex: 100,
      backgroundColor: 'white',
      borderTop: `1px solid ${global.color.gray[200]}`,
      padding: '0',
    },
  },
});

export const loadingBarWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
