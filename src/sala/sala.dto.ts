import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class SalaDTO {

    @ApiModelProperty({
        example: 'Problema do caixeiro-viajante',
    })
    @IsNotEmpty()
    descrPergunta: string;

    @ApiModelProperty({
        example: 'sincrona',
    })
    @IsNotEmpty()
    tipo: string;

    @ApiModelProperty({
        example: new Date().toISOString(),
    })
    @IsNotEmpty()
    dataAbertura: Date;

    @ApiModelProperty({
        example: new Date().toISOString(),
    })
    horaFim: Date;
}
