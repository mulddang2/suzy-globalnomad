import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({
  position: 'relative',
  textAlign: 'left',
  height: '100%',
});

export const dropdownButton = style({
  width: '100%',
  display: 'inline-flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '15px',
  border: `1px solid ${global.color.green[200]}`,
  backgroundColor: '#FFFFFF',
  padding: '13.5px 10px',
  fontSize: global.fontSize.regular,
  color: global.color.green[200],
  fontWeight: 500,
  gap: '8px',
  height: '100%',
  
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      padding: '10px 8px',
      gap: '3px',
    },
    'screen and (max-width: 767px)': {
      fontSize: global.fontSize.xSmall,
      lineHeight: 'normal',
      padding: '8px 4px',
      gap: '3px',
    },
  },
});

export const itemText = style({
  textWrap: 'nowrap',
});

export const dropdownList = style({
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: '8px',
  borderRadius: '10px',
  border: `1px solid ${global.color.gray[300]}`,
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 16px rgb(17 34 17 / 0.05)',
  zIndex: 10,
});

export const dropdownListItem = style({
  padding: '18px 12px',
  width: '100%',
  minHeight: '58px',
  fontSize: global.fontSize.regular,
  lineHeight: global.lineHeights.tiny,
  color: global.color.gray[900],
  textWrap: 'nowrap',

  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${global.color.gray[200]}`,
    },
  },

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: global.fontSize.xSmall,
      lineHeight: 'normal',
      padding: '9px 5px',
    },
  },
});
