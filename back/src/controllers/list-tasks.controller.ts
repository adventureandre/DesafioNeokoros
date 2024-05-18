import { Controller, Get, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/tasks')
@UseGuards(AuthGuard('jwt'))
export class ListTasksController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@CurrentUser() user: UserPayload) {
    const tasks = await this.prisma.task.findMany({
      where: { authorId: user.sub },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return { tasks }
  }
}
