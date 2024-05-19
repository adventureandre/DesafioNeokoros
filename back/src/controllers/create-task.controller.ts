import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createTaskBodySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
})

type CreateTaskBodySchema = z.infer<typeof createTaskBodySchema>

@Controller('/tasks')
@UseGuards(AuthGuard('jwt'))
export class CreateTaskController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(new ZodValidationPipe(createTaskBodySchema))
    body: CreateTaskBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, status, priority, description, dueDate } = body
    const userId = user.sub

    const newTask = await this.prisma.task.create({
      data: {
        title,
        status,
        priority,
        description,
        dueDate,
        authorId: userId,
      },
    })

    return { newTask }
  }
}
