import { Controller, Get, Post, Body, Request, Param, Query } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Usuário')
@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  showAllUsuarios() {
    return this.usuarioService.showAll();
  }

  @Get('porPapel')
  buscarPorPapel(@Query() query) {
    return this.usuarioService.buscarPorPapel(query.papel);
  }

  @Get(':id')
  showOneUsuario(@Param() params) {
    return this.usuarioService.showOne(params.id);
  }

  @Post('auth')
  auth(@Body() { cpf }: UsuarioDTO) {
    return this.usuarioService.auth(cpf);
  }

  

  @Post()
  cadastrarUsuario(@Body() usuarioData: UsuarioDTO) {
    return this.usuarioService.cadastrar(usuarioData);
  }

  @Post('importarUsuarios')
  importarCursos() {
    return this.usuarioService.importarUsuarios();
  }
}
