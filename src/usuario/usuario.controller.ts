import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
} from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';
import { ApiUseTags } from '@nestjs/swagger';
import { FindByIdParams } from 'src/common/dtos/singleid.dto';

@ApiUseTags( 'Usuário' )
@Controller( 'usuarios' )
export class UsuarioController {
  constructor( private usuarioService: UsuarioService ) { }

  @Get()
  showAllUsuarios () {
    return this.usuarioService.showAll();
  }

  @Get('')
  showOneUsuario(@Param() params: FindByIdParams, @Request() req) {
    return this.usuarioService.showOne(req);
  }

  @Post()
  cadastrarUsuario ( @Body() usuarioData: UsuarioDTO ) {
    return this.usuarioService.cadastrar( usuarioData );
  }
}
