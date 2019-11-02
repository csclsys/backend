import {
  Controller,
  Get,
  Post,
  UsePipes,
  Body,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags( 'Usuário' )
@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  showAllUsuarios() {
    return this.usuarioService.showAll();
  }

  @Post()
  cadastrarUsuario(@Body() usuarioData: UsuarioDTO) {
    return this.usuarioService.cadastrar(usuarioData);
  }
}
