import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'

export const Tasks = () => {
  const { signed, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div> // ou qualquer indicador de carregamento
  }

  return signed ? <h1>Taski aki</h1> : <Navigate to="/signin" />
}
