import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DisciplinaEntity } from './disciplina.entity';
import { DisciplinaDTO } from './disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(
    @InjectRepository(DisciplinaEntity)
    private disciplinaRepository: Repository<DisciplinaEntity>,
  ) {}

  async showAll() {
    const disciplinas = await this.disciplinaRepository.find({});
    // @ts-ignore
    return disciplinas.map(disciplina => disciplina);
  }

  async cadastrar(data: DisciplinaDTO) {
    const { nome } = data;
    let disciplina = await this.disciplinaRepository.findOne({
      where: { nome },
    });
    if (disciplina) {
      throw new HttpException('Disciplina já existe', HttpStatus.BAD_REQUEST);
    }
    disciplina = await this.disciplinaRepository.create(data);
    await this.disciplinaRepository.save(disciplina);
    // @ts-ignore
    return disciplina;
  }
}
