import {
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';

import { MatriculaMonitorService } from './matricula-monitor.service';
import { MatriculaMonitorDTO } from './matricula-monitor.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('MatriculaMonitor')
@Controller('matriculaMonitores')
export class MatriculaMonitorController {
    constructor(private matriculaMonitorService: MatriculaMonitorService) { }

    @Get()
    showAllMatriculaMonitors() {
        return this.matriculaMonitorService.showAll();
    }

    @Post()
    cadastrarMatriculaMonitor(@Body() matriculaMonitorData: MatriculaMonitorDTO) {
        return this.matriculaMonitorService.cadastrar(matriculaMonitorData);
    }

    @Post('importarMatriculaMonitors')
    importarMatriculaMonitors() {
        return this.matriculaMonitorService.importarMatriculaMonitors();
    }
}
