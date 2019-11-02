import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoEntity } from './curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CursoEntity])],
  providers: [CursoService],
  controllers: [CursoController],
})
export class CursoModule {}
