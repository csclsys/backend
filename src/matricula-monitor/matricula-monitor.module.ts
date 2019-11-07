import { Module } from '@nestjs/common';
import { MatriculaMonitorService } from './matricula-monitor.service';
import { MatriculaMonitorController } from './matricula-monitor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaMonitorEntity } from './matricula-monitor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatriculaMonitorEntity])],
  providers: [MatriculaMonitorService],
  controllers: [MatriculaMonitorController]
})
export class MatriculaMonitorModule { }
