import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { TurmaEntity } from './turma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TurmaEntity])],
  providers: [TurmaService],
  controllers: [TurmaController]
})
export class TurmaModule {}
