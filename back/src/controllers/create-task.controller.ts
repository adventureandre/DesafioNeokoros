import { Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Controller('/tasks')
@UseGuards(AuthGuard('jwt'))
export class CreateTaskController {
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
