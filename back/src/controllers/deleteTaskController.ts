import {
  Controller,
  Delete,
  Param,
  UseGuards,
  NotFoundException,
  HttpCode,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/tasks/:id')
@UseGuards(AuthGuard('jwt'))
export class DeleteTaskController {
  constructor(private prisma: PrismaService) {}

  @Delete()
  @HttpCode(204)
  async handle(@Param('id') taskId: string, @CurrentUser() user: UserPayload) {
    // tarefa e do usuario antes de deletar

    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      select: { authorId: true },
    })
    if (!task || task.authorId !== user.sub) {
      throw new NotFoundException('Task not found')
    }

    await this.prisma.task.delete({
      where: { id: taskId },
    })

    return { message: 'Task deleted successfully' }
  }
}
