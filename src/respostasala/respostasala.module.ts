import { Module } from '@nestjs/common';
import { RespostasalaService } from './respostasala.service';
import { RespostasalaController } from './respostasala.controller';

@Module({
  providers: [RespostasalaService],
  controllers: [RespostasalaController]
})
export class RespostasalaModule {}
