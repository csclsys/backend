import { Module } from '@nestjs/common';
import { VideoconferenciaService } from './videoconferencia.service';
import { VideoconferenciaController } from './videoconferencia.controller';

@Module({
  providers: [VideoconferenciaService],
  controllers: [VideoconferenciaController]
})
export class VideoconferenciaModule {}
