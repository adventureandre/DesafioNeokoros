import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const tasksSchema = z.object({
  title: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed']).optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
})

type TasksSchema = z.infer<typeof tasksSchema>

@Controller('/tasks')
@UseGuards(AuthGuard('jwt'))
export class ListTasksController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(
    @Query(new ZodValidationPipe(tasksSchema)) query: TasksSchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, status, priority } = query
    const userId = user.sub

    const tasks = await this.prisma.task.findMany({
      where: {
        authorId: userId,
        ...(title && { title }),
        ...(status && { status }),
        ...(priority && { priority }),
      },
    })

    return { tasks }
  }
}
