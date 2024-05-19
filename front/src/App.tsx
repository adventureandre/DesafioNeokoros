import { Helmet, HelmetProvider } from 'react-helmet-async'
import { GlobalStyles } from './styles/global'

import { ThemeProvider } from './styles/theme-provider'

import { AppRouter } from './routes'

import { AuthProvider } from './context/auth'

import { Toaster } from 'sonner'
import { TaskProvider } from './context/TaskContext'

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
          <TaskProvider>
            <AppRouter />
          </TaskProvider>
        </AuthProvider>
      </ThemeProvider>
      <GlobalStyles />
    </HelmetProvider>
  )
}
