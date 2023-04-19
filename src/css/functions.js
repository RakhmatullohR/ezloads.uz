import { Colors } from './color';

export const handleFormElementdWidth = ({ styles }) => {
  switch (styles.size) {
    case 'small':
      return '90px';
    case 'medium':
      return '250px';
    case 'large':
      return '300px';
    default:
      return '100%';
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
      return '36px';
  }
};

export const handleFontSize = ({ styles }) => {
  const size = styles?.size?.toLowerCase();

  switch (size) {
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '18px';
    default:
      return '16px';
  }
};

export const handleBgColor = ({ styles }) => {
  return styles.bgcolor ? styles.bgcolor : '#ffffff';
};

export const handleBorder = ({ styles }) => {
  const bdColor = styles.borderColor ? styles.borderColor : Colors.LightGrey;

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
  return styles.color ? styles.color : Colors.Grey;
};

export const handleBorderRadius = ({ styles }) => {
  return styles.borderRadius ? styles.borderRadius : '1px solid grey';
};

export const handleHoverColor = ({ styles }) => {
  return styles.hoverColor ? styles.hoverColor : Colors.Blue;
};

export const getSelectStyle = ({ bg }) => {
  bg = bg !== null && bg?.toLowerCase();
  switch (bg) {
    case 'transit':
    case 'in_transit':
      return {
        bg: 'rgba(0, 127, 186, 0.05)',
        borderC: '0.5px solid #1893FF',
        fcolor: '#1893FF',
      };

    // case 'ready':
    // return {
    //   bg: 'rgba(0, 181, 51, 0.05)',
    //   borderC: '0.5px solid #00B533',
    //   fcolor: '#00B533',
    // };
    case 'ready':
    case 'ready_1':
      return {
        bg: 'rgba(0, 181, 51, 0.05)',
        borderC: '0.5px solid #00B533',
        fcolor: '#00B533',
      };
    case 'ready_2':
      return {
        bg: 'rgba(207, 19, 34, 0.05)',
        borderC: '0.5px solid #CF1322',
        fcolor: '#CF1322',
      };
    case 'ready_3':
      return {
        bg: 'rgba(0, 0, 0, 0.05)',
        borderC: '0.5px solid #000000',
        fcolor: '#000000',
      };
    case 'open':
    case 'need_load':
      return {
        bg: 'rgba(255, 0, 0, 0.05)',
        borderC: '0.5px solid #FF0000',
        fcolor: '#FF0000',
      };
    case 'home':
    case 'vacation':
      return {
        bg: 'rgba(255, 179, 175, 0.05)',
        borderC: '0.5px solid #FFB3AF',
        fcolor: '#FFB3AF',
      };
    case 'rest':
    case 'reserved':
      return {
        bg: 'rgba(92, 100, 112, 0.05)',
        borderC: '0.5px solid #5C6470',
        fcolor: '#5C6470',
      };
    case 'completed':
      return {
        bg: 'rgba(0, 0, 0, 0.05)',
        borderC: '0.5px solid #000000',
        fcolor: '#000000',
      };
    case 'planning':
      return {
        bg: 'rgba(4, 166, 251, 0.05)',
        borderC: '0.5px solid #1893FF',
        fcolor: '#1893FF',
      };
    case 'shop':
      return {
        bg: 'rgba(19, 194, 194, 0.05)',
        borderC: '0.5px solid #13C2C2',
        fcolor: '#13C2C2',
      };
    case 'hold':
      return {
        bg: 'rgba(236, 127, 49, 0.05)',
        borderC: '0.5px solid #FF9900',
        fcolor: '#FF9900',
      };
    case 'confirmed':
      return {
        bg: 'rgba(255, 153, 0, 0.05)',
        borderC: '0.5px solid #EC7F31',
        fcolor: '#EC7F31',
      };

    case 'dispatched':
      return {
        bg: 'rgba(177, 94, 228, 0.05)',
        borderC: '0.5px solid #B15EE4',
        fcolor: '#B15EE4',
      };
    case 'recovered':
      return {
        bg: 'rgba(8, 92, 131, 0.05)',
        borderC: '0.5px solid #085C83',
        fcolor: '#085C83',
      };
    case 'cancelled':
    case 'rejected':
      return {
        bg: 'rgba(136, 0, 27, 0.05)',
        borderC: '0.5px solid #88001B',
        fcolor: '#88001B',
      };
    case 'has_next_load':
    case 'has_weekly_plan':
      return {
        bg: 'gba(0, 181, 51, 0.05)',
        borderC: '0.5px solid #00B533',
        fcolor: '#00B533',
      };
    case 'no_next_load':
      return {
        bg: 'rgba(255, 0, 0, 0.05)',
        borderC: '0.5px solid #FF0000',
        fcolor: '#FF0000',
      };
    case 'null':
      return {
        bg: 'rgba(255, 0, 0, 0.05)',
        borderC: '0.5px solid #FF0000',
        fcolor: '#FF0000',
      };
    default:
      return {
        bg: '#fff',
        // borderC: '0.5px solid #D9D9D9',
        fcolor: '#D9D9D9',
      };
  }
};
