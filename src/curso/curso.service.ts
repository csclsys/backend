import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CursoEntity } from './curso.entity';
import { CursoDTO } from './curso.dto';

import Axios from 'axios';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(CursoEntity)
    private cursoRepository: Repository<CursoEntity>,
  ) {}

  async showAll() {
    const cursos = await this.cursoRepository.find({});
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
    return curso;
  }

  async importarCursos() {
    let cursos: any[] = [];
    let ret: any[] = [];

    await Axios.get(
      'https://my-json-server.typicode.com/csclsys/db-repository/cursos',
    ).then(res => {
      cursos = res.data;
    });

    for (let curso of cursos) {
      ret.push(await this.cadastrar({ nome: curso.nome }));
    }

    return ret;
  }
}
