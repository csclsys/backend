import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RespostaSalaDTO {

    @ApiModelProperty({
        example: 'É um problema, realmente, difícil!',
    })
    @IsNotEmpty()
    texto: string;

    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    salaId: number;

    @ApiModelProperty({
        example: 1,
    })
    respostaId?: number;

    @ApiModelProperty({
        example: 1,
    })
    @IsNotEmpty()
    usuarioId: number;
}
