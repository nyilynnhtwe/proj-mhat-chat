import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { PrismaModule } from './prisma/prisma.module';
import { CastsModule } from './casts/casts.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MoviesModule, PrismaModule,CastsModule,AuthModule,UsersModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
