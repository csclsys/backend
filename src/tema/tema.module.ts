import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';

@Module({
  providers: [TemaService],
  controllers: [TemaController]
})
export class TemaModule {}
