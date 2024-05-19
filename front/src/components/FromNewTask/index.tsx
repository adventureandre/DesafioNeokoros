import { PlusCircle } from 'phosphor-react'
import { Button, Input } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../context/auth'

const schemaNewTask = z.object({
  newTask: z.string(),
})

type SchemaNewTask = z.infer<typeof schemaNewTask>

export const FormNewTask = () => {
  const {userId} = useAuth()
  const { register, handleSubmit } = useForm<SchemaNewTask>({
    resolver: zodResolver(schemaNewTask),
  })

  const handleNewTask = async (data: SchemaNewTask) => {
    console.log('data', data)
    console.log('id', userId)
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
