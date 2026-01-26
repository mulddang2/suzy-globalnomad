import { style } from '@vanilla-extract/css';

export const content = style({
  width: '100%',
  maxWidth: '792px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '429px',
    },
  },
});

export const contentHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
});

export const history = style({
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '38px',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
});

export const ref = style({
  height: '5px',
});

export const mobileMenuTitle = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});
