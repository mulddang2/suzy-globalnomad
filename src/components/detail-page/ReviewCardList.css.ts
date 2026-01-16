import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const contentsLayout = style({
  display: 'flex',
  gap: '16px',
  paddingBottom: '24px',

  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${global.color.gray[300]}`,
    },
    '&:not(:first-child)': {
      paddingTop: '24px',
    },
  },
});

export const profileImageBox = style({
  backgroundColor: '#E3E5E8',
  position: 'relative',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileImageContent = style({
  position: 'absolute',
});

export const profileDefaultImage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const dateInfo = style({
  color: global.color.nomadBlack,
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const nickName = style([fontSizes.textLg, fontWeights.bold]);

export const dayCreated = style([
  {
    color: `${global.color.gray[600]}`,
  },
  fontSizes.textLg,
  fontWeights.regular,
]);

export const content = style([
  {
    maxWidth: '729px',
    color: global.color.nomadBlack,
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-word',
    minHeight: '78px',
  },
  fontSizes.textLg,
]);

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
