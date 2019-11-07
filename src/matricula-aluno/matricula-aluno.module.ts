import { Module } from '@nestjs/common';
import { MatriculaAlunoService } from './matricula-aluno.service';
import { MatriculaAlunoController } from './matricula-aluno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaAlunoEntity } from './matricula-aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatriculaAlunoEntity])],
  providers: [MatriculaAlunoService],
  controllers: [MatriculaAlunoController]
})
export class MatriculaAlunoModule {}
