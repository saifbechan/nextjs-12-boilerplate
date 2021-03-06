import { theme as baseTheme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: {
      primary: 'rgb(20, 21, 38)',
      dimmed: 'rgba(20, 21, 38, 0.5)',
    },
    text: {
      dimmed: baseTheme.colors.gray[400],
    },
  },
  fonts: { heading: 'Outfit, "Segoe UI", Roboto, sans-serif' },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'background.primary',
        color: baseTheme.colors.gray[100],
        fontFamily: 'Outfit, "Segoe UI", Roboto, sans-serif',
        fontSize: '14px',
        margin: 0,
        padding: 0,
      },
      a: {
        textDecoration: 'none',
        transition: 'all 0.2s ease-in-out',
      },
      'a:hover': {
        textShadow: '0 0 10px deeppink',
        color: 'burlywood',
      },
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: baseTheme.colors.gray[700],
        borderRadius: '30px',
      },
    },
  },
});

export default theme;
