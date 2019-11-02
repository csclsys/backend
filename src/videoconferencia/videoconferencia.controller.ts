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

import { VideoConferenciaService } from './videoConferencia.service';
import { VideoConferenciaDTO } from './videoConferencia.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('VideoConferencia')
@Controller('videoConferencias')
export class VideoConferenciaController {
    constructor(private videoConferenciaService: VideoConferenciaService) { }

    @Get()
    showAllVideoConferencias() {
        return this.videoConferenciaService.showAll();
    }

    @Post()
    cadastrarVideoConferencia(@Body() videoConferenciaData: VideoConferenciaDTO) {
        return this.videoConferenciaService.cadastrar(videoConferenciaData);
    }
}
