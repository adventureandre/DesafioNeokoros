import { PlusCircle } from 'phosphor-react'
import { Button, Input } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { toast } from 'sonner'

const schemaNewTask = z.object({
  newTask: z.string(),
})

type SchemaNewTask = z.infer<typeof schemaNewTask>

export const FormNewTask = () => {
  const { register, handleSubmit, reset } = useForm<SchemaNewTask>({
    resolver: zodResolver(schemaNewTask),
  })

  const checkTaskDuplicate = async (title: string) => {
    const token = localStorage.getItem('@AuthNeokoros:accessToken')
    const response = await api.get('/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        title,
      },
    })

    return response.data.tasks.length > 0
  }

  const handleNewTask = async (data: SchemaNewTask) => {
    const title = data.newTask
    const token = await localStorage.getItem('@AuthNeokoros:accessToken')

    try {
      const isDuplicate = await checkTaskDuplicate(title)
      if (isDuplicate) {
        toast.error('Essa Tarefa já Existe.')
        return
      }

      await api.post(
        '/tasks',
        {
          title,
          status: 'pending',
          priority: 'medium',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      toast.success('Tarefa adicionada!.')
      reset()
    } catch (e) {
      throw new Error('Failed to create task: ' + e)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleNewTask)}>
      <Input
        type="text"
        placeholder="Adicione uma nova tarefa"
        {...register('newTask')}
      />
      <Button>
        Criar <PlusCircle size={32} />
      </Button>
    </form>
  )
}
