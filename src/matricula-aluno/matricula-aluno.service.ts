import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MatriculaAlunoEntity } from './matricula-aluno.entity';
import { MatriculaAlunoDTO } from './matricula-aluno.dto';

import Axios from 'axios';

@Injectable()
export class MatriculaAlunoService {
    constructor(
        @InjectRepository(MatriculaAlunoEntity)
        private matriculaAlunoRepository: Repository<MatriculaAlunoEntity>,
    ) { }

    async showAll() {
        const matriculaAlunos = await this.matriculaAlunoRepository.find({});
        return matriculaAlunos.map(matriculaAluno => matriculaAluno);
    }

    async cadastrar(data: MatriculaAlunoDTO) {
        const { turmaId, usuarioId } = data;
        let matriculaAluno = await this.matriculaAlunoRepository.findOne({
            where: { turmaId, usuarioId },
        });
        if (matriculaAluno) {
            throw new HttpException('MatriculaAluno já existe', HttpStatus.BAD_REQUEST);
        }
        matriculaAluno = await this.matriculaAlunoRepository.create(data);
        await this.matriculaAlunoRepository.save(matriculaAluno);
        return matriculaAluno;
    }

    async importarMatriculaAlunos() {
        let matriculaAlunos: any[] = [];
        let ret: any[] = [];

        await Axios.get(
            'https://my-json-server.typicode.com/csclsys/db-repository/matriculaAlunos',
        ).then(res => {
            matriculaAlunos = res.data;
        });

        for (const matriculaAluno of matriculaAlunos) {
            const { turmaId, usuarioId } = matriculaAluno;
            ret.push(await this.cadastrar({ turmaId, usuarioId }));
        }

        return ret;
    }
}
