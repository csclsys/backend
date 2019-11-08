import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';
import { RespostaSalaService } from './respostasala.service';
import { RespostaSalaDTO } from './respostasala.dto';

@ApiUseTags('RespostaSala')
@Controller('respostaSalas')
export class RespostaSalaController {
  constructor(private respostaSalaService: RespostaSalaService) {}

  @Get()
  showAllRespostaSalas() {
    return this.respostaSalaService.showAll();
  }

  @Get('porSala')
  respostasPorSala(@Query() query) {
    return this.respostaSalaService.respostasPorSala(query.salaId);
  }

  @Post()
  cadastrarRespostaSala(@Body() respostaSalaData: RespostaSalaDTO) {
    return this.respostaSalaService.cadastrarResposta(respostaSalaData);
  }
}
