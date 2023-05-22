const theme = {
  color: {
    primary: '#5B5B5B',
    secondary: '#EEEEEE',
  },
  background: {
    primary: {
      page: '#FAFAFA',
      menu: '#F0F0F0',
      card: '#E2E2E2',
      input: '#EEEEEE',
    },
    secondary: {
      page: '#001E33',
      menu: '#001B2E',
      card: '#001320',
      input: '#00192A',
    },
    cards: {
      red: '#D00000',
      orange: '#F57F00',
      yellow: '#F1C500',
      green: '#6FC400',
    },
  },
  boxShadow: {
    primary: '2px -1px 4px rgba(115,115,115,0.75)',
    secondary: '2px -1px 4px rgba(0,16,27,0.75)',
  },
  gradient: {
    primary:
      'linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(231,231,231,1) 35%, rgba(168,168,168,1) 100%)',
    secondary:
      'linear-gradient(90deg, rgba(0,33,57,1) 0%, rgba(0,27,46,1) 35%, rgba(0,16,27,1) 100%)',
    red: 'linear-gradient(90deg, rgba(223,80,80,1) 0%, rgba(208,0,0,1) 100%)',
    orange:
      'linear-gradient(90deg, rgba(242,152,54,1) 0%, rgba(245,127,0,1) 100%)',
    yellow:
      'linear-gradient(90deg, rgba(236,207,80,1) 0%, rgba(241,197,0,1) 100%)',
    green:
      'linear-gradient(90deg, rgba(151,200,87,1) 0%, rgba(111,196,0,1) 100%)',
  },
  zIndex: {
    page: 1,
    menu: 10,
    modal: 100,
  },
};

export default theme;
