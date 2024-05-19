import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { TaskProps } from '../pages/Tasks'
import { api } from '../lib/axios'

interface TaskProviderProps {
  children: ReactNode
}

interface TaskContextData {
  tasks: TaskProps[] | undefined
  fetchTasks: () => void
  handleStatusTask: (id: string) => void
  handleDeleteTask: (id: string) => void
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const fetchTasks = async () => {
    const token = await localStorage.getItem('@AuthNeokoros:accessToken')
    if (token) {
      try {
        const taskResponse = await api.get('/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setTasks(taskResponse.data.tasks)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleStatusTask = (id: string) => {
    // Lógica para atualizar status da tarefa
  }

  const handleDeleteTask = (id: string) => {
    // Lógica para deletar a tarefa
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTasks, handleStatusTask, handleDeleteTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTasks = () => {
  return useContext(TaskContext)
}
