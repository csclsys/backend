import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RespostaSalaEntity } from './respostasala.entity';
import { RespostaSalaDTO } from './respostasala.dto';

@Injectable()
export class RespostaSalaService {
  constructor(
    @InjectRepository(RespostaSalaEntity)
    private respostaSalaRepository: Repository<RespostaSalaEntity>,
  ) {}

  async showAll() {
    const respostaSalas = await this.respostaSalaRepository.find({});

    return respostaSalas.map(respostaSala => respostaSala);
  }

  async respostasPorSala(salaId: number) {
    const respostaSalas = await this.respostaSalaRepository.find({ where: { salaId } });
    return respostaSalas.map(respostaSala => respostaSala);
  }

  async cadastrarResposta(data: RespostaSalaDTO) {
    const respostaSala = await this.respostaSalaRepository.create(data);
    await this.respostaSalaRepository.save(respostaSala);

    return respostaSala;
  }
}
