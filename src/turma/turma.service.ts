import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TurmaEntity } from './turma.entity';
import { TurmaDTO } from './turma.dto';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(TurmaEntity)
    private turmaRepository: Repository<TurmaEntity>,
  ) {}

  async showAll() {
    const turmas = await this.turmaRepository.find({
    });
    // @ts-ignore
    return turmas.map(turma => turma);
  }

  async cadastrar(data: TurmaDTO) {
    const { nome, ano, semestre } = data;
    let turma = await this.turmaRepository.findOne({ where: { nome, ano, semestre } });
    if (turma) {
      throw new HttpException('Turma já existe', HttpStatus.BAD_REQUEST);
    }
    turma = await this.turmaRepository.create(data);
    await this.turmaRepository.save(turma);
        // @ts-ignore
    return turma;
  }

  /* async read(turmaname: string) {
    const turma = await this.turmaRepository.findOne({
      where: { turmaname },
      relations: ['ideas', 'bookmarks'],
    });
    return turma.toResponseObject(false);
  }

  async login(data: TurmaDTO) {
    const { turmaname, password } = data;
    const turma = await this.turmaRepository.findOne({ where: { turmaname } });
    if (!turma || !(await turma.comparePassword(password))) {
      throw new HttpException(
        'Invalid turmaname/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return turma.toResponseObject();
  }

   */
}
