import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { SalaService } from './sala.service';
import { SalaDTO } from './sala.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Sala')
@Controller('salas')
export class SalaController {
  constructor(private salaService: SalaService) {}

  @Get()
  showAllSalas() {
    return this.salaService.showAll();
  }

  @Get(':id')
  showOneSala(@Param() params) {
    return this.salaService.showOne(params.id);
  }

  @Post()
  cadastrarSala(@Body() salaData: SalaDTO) {
    return this.salaService.cadastrar(salaData);
  }
}
