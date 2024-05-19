/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserId {
  userId: string
}

interface AuthProviderProps {
  children: ReactNode
}

interface signInProps {
  email: string
  password: string
}

interface AuthContextType {
  userId: UserId | null
  signed: boolean
  signIn: ({ email, password }: signInProps) => Promise<void>
  signOut: () => void
  loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signed: false,
  userId: null,
  loading: true,
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useState<UserId | null>(null)
  const [signed, setSigned] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadingStoreData = () => {
    const storegeUserId = localStorage.getItem('@AuthNeokoros:userId')
    const userToken = localStorage.getItem('@AuthNeokoros:accessToken')

    if (storegeUserId && userToken) {
      const userID: UserId = { userId: storegeUserId }
      setUserId(userID)
      setSigned(true)
    }
    setLoading(false)
  }

  const signIn = async ({ email, password }: signInProps) => {
    try {
      const response = await api.post('/sessions', { email, password })
      const { access_token, user_id } = response.data

      const userID = { userId: user_id }
      setUserId(userID)
      setSigned(true)

      // Aki estou salvando o token no storege
      localStorage.setItem('@AuthNeokoros:accessToken', access_token)
      localStorage.setItem('@AuthNeokoros:userId', user_id)
    } catch (e) {
      throw new Error('Credenciais inválidas.')
    }
  }

  const signOut = () => {
    localStorage.removeItem('@AuthNeokoros:accessToken')
    localStorage.removeItem('@AuthNeokoros:userId')
    setUserId(null)
    setSigned(false)
  }

  useEffect(() => {
    loadingStoreData()
  }, [])

  const value = {
    userId,
    signed,
    signIn,
    signOut,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext)
