import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PrismaService } from './prisma/prisma.service'
import { envSchema } from './env'

import { AuthModule } from './auth/auth.modules'

import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateTaskController } from './controllers/create-task.controller'
import { ListTasksController } from './controllers/list-tasks.controller'
import { DeleteTaskController } from './controllers/deleteTaskController'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateTaskController,
    ListTasksController,
    DeleteTaskController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
