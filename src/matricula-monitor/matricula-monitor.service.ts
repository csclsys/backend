import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MatriculaMonitorEntity } from './matricula-monitor.entity';
import { MatriculaMonitorDTO } from './matricula-monitor.dto';

import Axios from 'axios';

@Injectable()
export class MatriculaMonitorService {
    constructor(
        @InjectRepository(MatriculaMonitorEntity)
        private matriculaMonitorRepository: Repository<MatriculaMonitorEntity>,
    ) { }

    async showAll() {
        const matriculaMonitores = await this.matriculaMonitorRepository.find({});
        return matriculaMonitores.map(matriculaMonitor => matriculaMonitor);
    }

    async cadastrar(data: MatriculaMonitorDTO) {
        const { turmaId, usuarioId } = data;
        let matriculaMonitor = await this.matriculaMonitorRepository.findOne({
            where: {  turmaId, usuarioId },
        });
        if (matriculaMonitor) {
            throw new HttpException('MatriculaMonitor já existe', HttpStatus.BAD_REQUEST);
        }
        matriculaMonitor = await this.matriculaMonitorRepository.create(data);
        await this.matriculaMonitorRepository.save(matriculaMonitor);
        return matriculaMonitor;
    }

    async importarMatriculaMonitors() {
        let matriculaMonitores: any[] = [];
        let ret: any[] = [];

        await Axios.get(
            'https://my-json-server.typicode.com/csclsys/db-repository/matriculaMonitores',
        ).then(res => {
            matriculaMonitores = res.data;
        });

        for (const matriculaMonitor of matriculaMonitores) {
            const { turmaId, usuarioId } = matriculaMonitor;
            ret.push(await this.cadastrar({ turmaId, usuarioId }));
        }

        return ret;
    }
}
