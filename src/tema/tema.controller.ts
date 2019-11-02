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

import { TemaService } from './tema.service';
import { TemaDTO } from './tema.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Tema')
@Controller('temas')
export class TemaController {
    constructor(private temaService: TemaService) { }

    @Get()
    showAllTemas() {
        return this.temaService.showAll();
    }

    @Post()
    cadastrarTema(@Body() temaData: TemaDTO) {
        return this.temaService.cadastrar(temaData);
    }
}
