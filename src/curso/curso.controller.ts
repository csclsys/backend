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

import { CursoService } from './curso.service';
import { CursoDTO } from './curso.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Curso')
@Controller('cursos')
export class CursoController {
  constructor(private cursoService: CursoService) {}

  @Get()
  showAllCursos() {
    return this.cursoService.showAll();
  }

  @Post()
  cadastrarCurso(@Body() cursoData: CursoDTO) {
    return this.cursoService.cadastrar(cursoData);
  }
}
