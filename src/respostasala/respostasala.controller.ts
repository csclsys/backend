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

import { RespostaSalaService } from './respostaSala.service';
import { RespostaSalaDTO } from './respostaSala.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('RespostaSala')
@Controller('respostaSalas')
export class RespostaSalaController {
    constructor(private respostaSalaService: RespostaSalaService) { }

    @Get()
    showAllRespostaSalas() {
        return this.respostaSalaService.showAll();
    }

    @Post()
    cadastrarRespostaSala(@Body() respostaSalaData: RespostaSalaDTO) {
        return this.respostaSalaService.cadastrar(respostaSalaData);
    }
}
