import { Module } from '@nestjs/common';
import { RespostaSalaService } from './respostasala.service';
import { RespostaSalaController } from './respostasala.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RespostaSalaEntity } from './respostaSala.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RespostaSalaEntity])],
  providers: [RespostaSalaService],
  controllers: [RespostaSalaController],
})
export class RespostasalaModule {}
