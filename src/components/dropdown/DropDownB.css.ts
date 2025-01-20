import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const dropdownContainerB = style({
  position: 'relative',
  width: '12rem',
  background: 'white',
  borderRadius: '1.5rem',
});

export const dropdownListB = style({
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '0.5rem',
  border: '0.0625rem solid #ccc',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
});

export const dropdownButtonB = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'white',
  border: `1px solid ${global.color.green[200]}`,
  borderRadius: '1rem',
  padding: '1rem 1rem',
  cursor: 'pointer',
  width: '100%',
  position: 'relative',
  color: global.color.green[200],
});

export const itemB = style({
  whiteSpace: 'nowrap',
  padding: '2rem',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  selectors: {
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
});

export const portalContainerB = style({
  width: '12rem',
  position: 'absolute',
  top: '10rem',
  left: '0',
  zIndex: 1000,
});

export const iconB = style({
  width: '2rem',
  height: '1.5rem',
  marginLeft: '0.5rem',
  marginTop: '0.5rem',
  transition: 'transform 0.3s ease',
  fill: global.color.green[200],
  selectors: {
    '&.open': {
      transform: 'rotate(180deg)',
    },
  },
});

export const open = style({ transform: 'rotate(180deg)', position: 'relative', top: '-0.5rem', left: '-0.4rem' });

export const listItemWithDividerB = style({
  selectors: { '&:not(:last-child)': { borderBottom: '0.0625rem solid #ccc' } },
});
