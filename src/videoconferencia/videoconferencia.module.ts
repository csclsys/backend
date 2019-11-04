import { Module } from '@nestjs/common';
import { VideoConferenciaService } from './videoconferencia.service';
import { VideoConferenciaController } from './videoconferencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoConferenciaEntity } from './videoconferencia.entity';


@Module( {
  imports: [ TypeOrmModule.forFeature( [ VideoConferenciaEntity ] ) ],
  providers: [ VideoConferenciaService ],
  controllers: [ VideoConferenciaController ]
} )
export class VideoconferenciaModule { }
