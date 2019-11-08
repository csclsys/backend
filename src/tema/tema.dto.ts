import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TemaDTO {
    @ApiModelProperty({
        example: 'Busca Heurística',
    })
    @IsNotEmpty()
    nome: string;

    @ApiModelProperty({
        example: 'pendente',
    })
    @IsNotEmpty()
    situacao: string;

    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    disciplinaId: number;

    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    proponenteId: number;
}
