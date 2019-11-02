import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RespostaSalaDTO {

    @ApiModelProperty({
        example: new Date().toISOString(),
    })
    @IsNotEmpty()
    horarioResposta: Date;

    @ApiModelProperty({
        example: 'É um problema, realmente, difícil !',
    })
    @IsNotEmpty()
    texto: string;
}
