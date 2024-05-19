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

interface SignUpProps {
  name: string
  email: string
  password: string
}

interface AuthContextType {
  userId: UserId | null
  signed: boolean
  signIn: ({ email, password }: signInProps) => Promise<void>
  signOut: () => void
  signUp: ({ name, email, password }: SignUpProps) => Promise<void>
  loading: boolean
  token: string | null
}

export const AuthContext = createContext<AuthContextType>({
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
  signed: false,
  userId: null,
  loading: true,
  token: null,
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userId, setUserId] = useState<UserId | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [signed, setSigned] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadingStoreData = async () => {
    const storegeUserToken = await localStorage.getItem(
      '@AuthNeokoros:accessToken',
    )
    const storegeUserId = await localStorage.getItem('@AuthNeokoros:userId')

    if (storegeUserId && storegeUserToken) {
      const userToken = storegeUserToken
      const userID: UserId = { userId: storegeUserId }

      setToken(userToken)
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

  const signUp = async ({ name, email, password }: SignUpProps) => {
    try {
      const response = await api.post('/accounts', { name, email, password })
      return response.data
    } catch (e) {
      throw new Error('Error ao criar Conta.')
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
    signUp,
    signOut,
    token,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext)
