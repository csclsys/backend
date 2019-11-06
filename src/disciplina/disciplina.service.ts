import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DisciplinaEntity } from './disciplina.entity';
import { DisciplinaDTO } from './disciplina.dto';
import Axios from 'axios';

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

  async showOne(id: number) {
    const disciplina = await this.disciplinaRepository.findOne({
      where: { id },
    });
    // @ts-ignore
    return disciplina;
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

  async importarDisciplinas() {
    let disciplinas: any[] = [];
    let ret: any[] = [];

    await Axios.get(
      'https://my-json-server.typicode.com/csclsys/db-repository/disciplinas',
    ).then(res => {
      disciplinas = res.data;
    });

    for (const disciplina of disciplinas) {
      const { nome } = disciplina;

      ret.push(
        await this.cadastrar({
          nome,
        }),
      );
    }

    return ret;
  }
}
