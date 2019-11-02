import { Module } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';
import { DisciplinaController } from './disciplina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinaEntity } from './disciplina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DisciplinaEntity])],
  providers: [DisciplinaService],
  controllers: [DisciplinaController],
})
export class DisciplinaModule {}
