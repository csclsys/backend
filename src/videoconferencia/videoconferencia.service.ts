import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VideoConferenciaEntity } from './videoConferencia.entity';
import { VideoConferenciaDTO } from './videoConferencia.dto';
import { thisTypeAnnotation } from '@babel/types';

@Injectable()
export class VideoConferenciaService {
    constructor(
        @InjectRepository(VideoConferenciaEntity)
        private videoConferenciaRepository: Repository<VideoConferenciaEntity>,
    ) { }

    async showAll() {
        const videoConferencias = await this.videoConferenciaRepository.find({});

        return videoConferencias.map(videoConferencia => videoConferencia);
    }

    async cadastrar(data: VideoConferenciaDTO) {
        const videoConferencia = await this.videoConferenciaRepository.create(data);
        await this.videoConferenciaRepository.save(videoConferencia);

        return videoConferencia;
    }
}
