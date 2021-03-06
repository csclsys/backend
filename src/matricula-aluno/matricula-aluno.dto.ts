import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class MatriculaAlunoDTO {
    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    turmaId: number;

    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    usuarioId: number;
}
