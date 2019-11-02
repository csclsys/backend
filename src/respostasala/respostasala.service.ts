import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RespostaSalaEntity } from './respostaSala.entity';
import { RespostaSalaDTO } from './respostaSala.dto';
import { thisTypeAnnotation } from '@babel/types';

@Injectable()
export class RespostaSalaService {
    constructor(
        @InjectRepository(RespostaSalaEntity)
        private respostaSalaRepository: Repository<RespostaSalaEntity>,
    ) { }

    async showAll() {
        const respostaSalas = await this.respostaSalaRepository.find({});

        return respostaSalas.map(respostaSala => respostaSala);
    }

    async cadastrar(data: RespostaSalaDTO) {
        const respostaSala = await this.respostaSalaRepository.create(data);
        await this.respostaSalaRepository.save(respostaSala);

        return respostaSala;
    }
}
