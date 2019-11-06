import {
  Controller,
  Get,
  Post,
  Body,
  Param
} from '@nestjs/common';

import { DisciplinaService } from './disciplina.service';
import { DisciplinaDTO } from './disciplina.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags( 'Disciplina' )
@Controller( 'disciplinas' )
export class DisciplinaController {
  constructor( private disciplinaService: DisciplinaService ) { }

  @Get()
  showAllDisciplinas () {
    return this.disciplinaService.showAll();
  }

  @Get(':id')
  showOneDisciplina(@Param() params) {
    return this.disciplinaService.showOne(params.id);
  }

  @Post()
  cadastrarDisciplina ( @Body() disciplinaData: DisciplinaDTO ) {
    return this.disciplinaService.cadastrar( disciplinaData );
  }
}
