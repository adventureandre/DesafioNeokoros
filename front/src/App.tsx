import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from './styles/theme-provider'
import { AppRouter } from './routes'
import { AuthProvider } from './context/auth'
import { Toaster } from 'sonner'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%S | NeoKoros" />
      <Toaster
        richColors
        position="top-right"
        style={{ width: '400px', height: '60px' }}
      />
      <ThemeProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyles />
    </HelmetProvider>
  )
}
