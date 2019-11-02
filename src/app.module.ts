import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { TurmaModule } from './turma/turma.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { CursoModule } from './curso/curso.module';
import { TemaModule } from './tema/tema.module';
import { VideoconferenciaModule } from './videoconferencia/videoconferencia.module';
import { SalaModule } from './sala/sala.module';
import { RespostasalaModule } from './respostasala/respostasala.module';

@Module({
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
