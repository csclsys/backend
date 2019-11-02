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

import { SalaService } from './sala.service';
import { SalaDTO } from './sala.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Sala')
@Controller('salas')
export class SalaController {
    constructor(private salaService: SalaService) { }

    @Get()
    showAllSalas() {
        return this.salaService.showAll();
    }

    @Post()
    cadastrarSala(@Body() salaData: SalaDTO) {
        return this.salaService.cadastrar(salaData);
    }
}
