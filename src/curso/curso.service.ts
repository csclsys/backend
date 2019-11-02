import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CursoEntity } from './curso.entity';
import { CursoDTO } from './curso.dto';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(CursoEntity)
    private cursoRepository: Repository<CursoEntity>,
  ) {}

  async showAll() {
    const cursos = await this.cursoRepository.find({});
    // @ts-ignore
    return cursos.map(curso => curso);
  }

  async cadastrar(data: CursoDTO) {
    const { nome } = data;
    let curso = await this.cursoRepository.findOne({
      where: { nome },
    });
    if (curso) {
      throw new HttpException('Curso já existe', HttpStatus.BAD_REQUEST);
    }
    curso = await this.cursoRepository.create(data);
    await this.cursoRepository.save(curso);
    // @ts-ignore
    return curso;
  }
}
