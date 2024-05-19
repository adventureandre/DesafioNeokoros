import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const updateTaskBodySchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
})

type UpdateTaskBodySchema = z.infer<typeof updateTaskBodySchema>

@Controller('/tasks/:id')
@UseGuards(AuthGuard('jwt'))
export class UpdateTaskController {
  constructor(private prisma: PrismaService) {}

  @Put()
  async handle(
    @Param('id') taskId: string,
    @Body(new ZodValidationPipe(updateTaskBodySchema))
    body: UpdateTaskBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, status, priority, description, dueDate } = body
    const userId = user.sub

    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        authorId: userId,
      },
    })

    if (!task) {
      throw new Error('Task not found or you are not authorized to update it.')
    }

    const updatedTask = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        title: title || task.title,
        description: description || task.description,
        dueDate: dueDate || task.dueDate,
        status: status || task.status,
        priority: priority || task.priority,
      },
    })

    return { updatedTask }
  }
}
