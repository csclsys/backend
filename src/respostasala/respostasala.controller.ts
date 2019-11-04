import {
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';
import { RespostaSalaService } from './respostasala.service';
import { RespostaSalaDTO } from './respostasala.dto';

@ApiUseTags( 'RespostaSala' )
@Controller( 'respostaSalas' )
export class RespostaSalaController {
    constructor( private respostaSalaService: RespostaSalaService ) { }

    @Get()
    showAllRespostaSalas () {
        return this.respostaSalaService.showAll();
    }

    @Post()
    cadastrarRespostaSala ( @Body() respostaSalaData: RespostaSalaDTO ) {
        return this.respostaSalaService.cadastrar( respostaSalaData );
    }
}
