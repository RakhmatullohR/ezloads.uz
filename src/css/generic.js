import { sizes } from './size';

export const handleFormElementdWidth = ({ styles }) => {
  const size = styles?.size?.toLowerCase();

  switch (size) {
    case 'small':
      return '80px';
    case 'medium':
      return '150px';
    case 'large':
      return '200px';
    default:
      return '100px';
  }
};

export const handleFormElementHeight = ({ styles }) => {
  const size = styles?.size?.toLowerCase();

  switch (size) {
    case 'small':
      return '30px';
    case 'medium':
      return '40px';
    case 'large':
      return '50px';
    default:
      return '30px';
  }
};

export const handleFontSize = ({ styles }) => {
  const size = styles?.size;

  switch (size) {
    case 'small':
      return sizes.small;
    case 'medium':
      return sizes.medium;
    case 'large':
      return sizes.large;
    default:
      return sizes.smaller;
  }
};

export const handleBgColor = ({ styles }) => {
  return styles.bgcolor ? styles.bgcolor : '#ffffff';
};

export const handleBorder = ({ styles }) => {
  const bdColor = styles.borderColor ? styles.borderColor : 'grey';

  switch (styles.border) {
    case 'small':
      return `1px solid ${bdColor}`;
    case 'medium':
      return `2px solid ${bdColor}`;
    case 'large':
      return `3px solid ${bdColor}`;
    default:
      return `0.5px solid ${bdColor}`;
  }
};

export const handleTextColor = ({ styles }) => {
  return styles.color ? styles.color : '#000000';
};

export const handleBorderRadius = ({ styles }) => {
  return styles.borderRadius ? styles.borderRadius : '1px solid grey';
};

export const handleHoverColor = ({ styles }) => {
  return styles.hoverColor ? styles.hoverColor : 'cyan';
};

export const getIconSize = ({ iconSize }) => {
  iconSize = iconSize?.toLowerCase();

  switch (iconSize) {
    case 'small':
      return '16.93px';
    case 'medium':
      return '19.93px';
    case 'large':
      return '23.93px';
    default:
      return '16.93px';
  }
};
