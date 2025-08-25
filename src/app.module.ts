import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { ServiceModule } from './modules/service/service.module';
import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, AdminModule, ServiceModule, BlogModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
