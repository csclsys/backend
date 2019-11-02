import { Module } from '@nestjs/common';
import { TemaService } from './tema.service';
import { TemaController } from './tema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaEntity } from './tema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TemaEntity])],
  providers: [TemaService],
  controllers: [TemaController],
})
export class TemaModule {}
