import { extendTheme } from '@chakra-ui/react'




const fonts = {
  body: `'Roboto', sans-serif`,
  heading: `'Roboto', sans-serif`,
  mono: `'Roboto', sans-serif`
}

const colors = {
  primary: {
    100: '#AFFFFF',
    200: '#6CFFFF',
    300: '#4FF3EC',
    400: '#2ADCD5',
    500: '#00D0C9',
    600: '#00AFA9',
    700: '#009A94',
    800: '#00847F',
    900: '#006F6B'
  },
  success: {
    100: '#BDFFD2',
    200: '#A1FFBF',
    300: '#87F3AA',
    400: '#70DC94',
    500: '#5DC983',
    600: '#41AF6B',
    700: '#269957',
    800: '#269957',
    900: '#269957'
  },
  danger: {
    100: '#FFADB8',
    200: '#FF96A3',
    300: '#FF7F8D',
    400: '#FF6979',
    500: '#EB5769',
    600: '#CD3B52',
    700: '#B52140',
    800: '#9C002E',
    900: '#84001E'
  },
  warning: {
    100: '#FFF6B2',
    200: '#FFF082',
    300: '#FFE946',
    400: '#FFD32A',
    500: '#FFC107',
    600: '#E1A700',
    700: '#C89200',
    800: '#B07E00',
    900: '#986A00'
  },
  gray: {
    100: "#FAFAFA",
    200: "#F3F3F3",
    300: "#F2F2F2",
    400: "#E3E3E3",
    500: "#DADADA",
    600: "#C9C9C9",
    700: "#BDBDBD",
    800: "#A8A8A8",
    900: "#383838",
  }
}

export const theme = extendTheme({
  colors,
  styles: {
    global: () => ({
      body: {
        bg: '#FAFAFA'
      }
    })
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
        h: '48px'
      }
    },
    Input: {
      defaultProps: {
        borderColor: 'gray.800',
        h: '42px'
      }
    },
    Table: {
      variants: {
        table: {
          tr: {
            _odd: {
              background: "gray.300"
            }
          }
        }
      }
    }
  },
  fonts,
})
