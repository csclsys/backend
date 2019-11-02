import {
  Controller,
  Get,
  Post,
  UsePipes,
  Body,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';

import { TurmaService } from './turma.service';
import { TurmaDTO } from './turma.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags( 'Turmas' )
@Controller('turmas')
export class TurmaController {
  constructor(private turmaService: TurmaService) {}

  @Get()
  showAllTurmas() {
    return this.turmaService.showAll();
  }

  @Post()
  cadastrarTurma(@Body() turmaData: TurmaDTO) {
    return this.turmaService.cadastrar(turmaData);
  }
}
