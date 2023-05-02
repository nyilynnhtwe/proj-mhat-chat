import { Module } from '@nestjs/common';
import { CastsService } from './casts.service';
import { CastsController } from './casts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CastsController],
  providers: [CastsService],
  imports:    [PrismaModule]
})
export class CastsModule {}
