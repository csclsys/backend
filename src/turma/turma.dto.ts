import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TurmaDTO {
  @ApiModelProperty({
    example: '8HC',
  })
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: '2',
  })
  semestre: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: '2019',
  })
  ano: string;
}
