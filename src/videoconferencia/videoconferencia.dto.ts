import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class VideoConferenciaDTO {

    @ApiModelProperty({
        example: new Date().toISOString(),
    })
    @IsNotEmpty()
    horaInicio: Date;

    @ApiModelProperty({
        example: new Date().toISOString(),
    })
    horaFim: Date;
}
