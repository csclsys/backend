import {
    Controller,
    Get,
    Post,
    Body
} from '@nestjs/common';

import { MatriculaAlunoService } from './matricula-aluno.service';
import { MatriculaAlunoDTO } from './matricula-aluno.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('MatriculaAluno')
@Controller('matricula-alunos')
export class MatriculaAlunoController {
    constructor(private matriculaAlunoService: MatriculaAlunoService) { }

    @Get()
    showAllMatriculaAlunos() {
        return this.matriculaAlunoService.showAll();
    }

    @Post()
    cadastrarMatriculaAluno(@Body() matriculaAlunoData: MatriculaAlunoDTO) {
        return this.matriculaAlunoService.cadastrar(matriculaAlunoData);
    }

    @Post('importarMatriculaAlunos')
    importarMatriculaAlunos() {
        return this.matriculaAlunoService.importarMatriculaAlunos();
    }
}
