import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class DisciplinaDTO {
  @ApiModelProperty({
    example: 'Complexidade de Algorítmos',
  })
  @IsNotEmpty()
  nome: string;
}
