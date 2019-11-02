import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CursoDTO {
  @ApiModelProperty({
    example: 'Ciência da Computação',
  })
  @IsNotEmpty()
  nome: string;
}
