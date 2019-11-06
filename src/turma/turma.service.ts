import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TurmaEntity } from './turma.entity';
import { TurmaDTO } from './turma.dto';
import Axios from 'axios';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(TurmaEntity)
    private turmaRepository: Repository<TurmaEntity>,
  ) {}

  async showAll() {
    const turmas = await this.turmaRepository.find({});
    // @ts-ignore
    return turmas.map(turma => turma);
  }

  async cadastrar(data: TurmaDTO) {
    const { nome, ano, semestre } = data;
    let turma = await this.turmaRepository.findOne({
      where: { nome, ano, semestre },
    });
    if (turma) {
      throw new HttpException('Turma já existe', HttpStatus.BAD_REQUEST);
    }
    turma = await this.turmaRepository.create(data);
    await this.turmaRepository.save(turma);
    // @ts-ignore
    return turma;
  }

  async importarTurmas() {
    let turmas: any[] = [];
    let ret: any[] = [];

    await Axios.get(
      'https://my-json-server.typicode.com/csclsys/db-repository/turmas',
    ).then(res => {
      turmas = res.data;
    });

    for (let turma of turmas) {
      const { nome, semestre, ano, professorId, disciplinaId } = turma;

      ret.push(
        await this.cadastrar({
          nome,
          semestre,
          ano,
          professorId,
          disciplinaId,
        }),
      );
    }

    return ret;
  }
}
