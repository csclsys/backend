import {
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';

import { ApiUseTags } from '@nestjs/swagger';
import { VideoConferenciaService } from './videoconferencia.service';
import { VideoConferenciaDTO } from './videoconferencia.dto';

@ApiUseTags( 'VideoConferencia' )
@Controller( 'videoConferencias' )
export class VideoConferenciaController {
    constructor( private videoConferenciaService: VideoConferenciaService ) { }

    @Get()
    showAllVideoConferencias () {
        return this.videoConferenciaService.showAll();
    }

    @Post()
    cadastrarVideoConferencia ( @Body() videoConferenciaData: VideoConferenciaDTO ) {
        return this.videoConferenciaService.cadastrar( videoConferenciaData );
    }
}
