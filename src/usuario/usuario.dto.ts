import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UsuarioDTO {
  @ApiModelProperty({
    example: 'João',
  })
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: 'Silva',
  })
  sobrenome: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: '00000000001',
  })
  cpf: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: '19000001',
  })
  matricula: string;

  @IsNotEmpty()
  @ApiModelProperty({
    example: 'monitor',
  })
  papel: string;
}
