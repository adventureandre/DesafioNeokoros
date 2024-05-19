export interface iTheme {
  colors: {
    primary: string
    primaryOver: string
    secondary: string
    white: string
    black: string
    success: string
    danger: string
    background: string
    border: string
    gray: {
      'gray-100': string
      'gray-200': string
      'gray-300': string
      'gray-400': string
      'gray-500': string
      'gray-600': string
      'gray-700': string
      'gray-800': string
      'gray-900': string
    }
    green: {
      'green-300': string
      'green-500': string
      'green-700': string
    }
    toolTipBackground: string
    toolTipBorder: string
  }
}

export const darkTheme: iTheme = {
  colors: {
    primary: '#6e8efb', // Cor primária do design fornecido
    primaryOver: '#864CCC', // Um tom de roxo mais escuro para hover
    secondary: '#41FFC6', // Cor secundária do design fornecido
    white: '#F5F5F5', // Branco para textos em fundo escuro
    black: '#141414', // Preto para textos em fundo claro
    success: '#25D757', // Verde de sucesso
    danger: '#F85640', // Vermelho de erro
    background: '#181818', // Fundo escuro
    border: '#222222', // Cor de borda
    gray: {
      'gray-100': '#E1E1E6',
      'gray-200': '#D0D0D5',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',
    },
    green: {
      'green-300': '#3aa88e',
      'green-500': '#00875F',
      'green-700': '#015F43',
    },
    toolTipBackground: '#25253475',
    toolTipBorder: '#373755',
  },
}

export const lightTheme: iTheme = {
  colors: {
    primary: '#6e8efb', // Cor primária do design fornecido
    primaryOver: '#864CCC', // Um tom de roxo mais escuro para hover
    secondary: '#41FFC6', // Cor secundária do design fornecido
    white: '#F5F5F5', // Preto claro para textos em fundo claro
    black: '#f7f7fd', // Branco para textos em fundo escuro
    success: '#25D757', // Verde de sucesso
    danger: '#F85640', // Vermelho de erro
    background: '#FFFFFF', // Fundo branco
    border: '#eee', // Cor de borda clara
    gray: {
      'gray-100': '#E1E1E6',
      'gray-200': '#D0D0D5',
      'gray-300': '#C4C4CC',
      'gray-400': '#8D8D99',
      'gray-500': '#7C7C8A',
      'gray-600': '#323238',
      'gray-700': '#29292E',
      'gray-800': '#202024',
      'gray-900': '#121214',
    },
    green: {
      'green-300': '#3aa88e',
      'green-500': '#00875F',
      'green-700': '#015F43',
    },
    toolTipBackground: '#eee',
    toolTipBorder: '#fff',
  },
}
