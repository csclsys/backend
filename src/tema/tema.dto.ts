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
        example: new Date().toISOString(),
    })
    @IsNotEmpty()
    dataInclusao: Date;
}
