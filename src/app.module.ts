import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { TurmaModule } from './turma/turma.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { CursoModule } from './curso/curso.module';
import { TemaModule } from './tema/tema.module';
import { VideoconferenciaModule } from './videoconferencia/videoconferencia.module';
import { SalaModule } from './sala/sala.module';
import { RespostasalaModule } from './respostasala/respostasala.module';
import { MatriculaAlunoModule } from './matricula-aluno/matricula-aluno.module';
import { MatriculaMonitorModule } from './matricula-monitor/matricula-monitor.module';


@Module( {
  imports: [
    TypeOrmModule.forRoot(),
    UsuarioModule,
    TurmaModule,
    DisciplinaModule,
    CursoModule,
    TemaModule,
    VideoconferenciaModule,
    SalaModule,
    RespostasalaModule,
    HttpModule,
    MatriculaAlunoModule,
    MatriculaMonitorModule,
  ],
  controllers: [],
  providers: [],
} )
export class AppModule { }
