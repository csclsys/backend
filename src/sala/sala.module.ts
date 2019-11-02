import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaEntity } from './sala.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalaEntity])],
  providers: [SalaService],
  controllers: [SalaController],
})
export class SalaModule {}
