import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SalaEntity } from './sala.entity';
import { SalaDTO } from './sala.dto';
import { thisTypeAnnotation } from '@babel/types';

@Injectable()
export class SalaService {
    constructor(
        @InjectRepository(SalaEntity)
        private salaRepository: Repository<SalaEntity>,
    ) { }

    async showAll() {
        const salas = await this.salaRepository.find({});

        return salas.map(sala => sala);
    }

    async cadastrar(data: SalaDTO) {
        const { descrPergunta } = data;

        let sala = await this.salaRepository.findOne({
            where: { descrPergunta },
        });

        if (sala) {
            throw new HttpException('A sala já existe!', HttpStatus.BAD_REQUEST);
        }

        sala = await this.salaRepository.create(data);
        await this.salaRepository.save(sala);

        return sala;
    }
}
