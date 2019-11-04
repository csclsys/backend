import {
  Controller,
  Get,
  Post,
  Body
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

  @Post()
  cadastrarDisciplina ( @Body() disciplinaData: DisciplinaDTO ) {
    return this.disciplinaService.cadastrar( disciplinaData );
  }
}
