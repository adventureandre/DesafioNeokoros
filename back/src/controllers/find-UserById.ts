import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/users/:id')
@UseGuards(AuthGuard('jwt'))
export class FindUserById {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@Param('id') idUser: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: idUser },
    })

    return { user }
  }
}
