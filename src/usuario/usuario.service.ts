import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async showAll() {
    const usuarios = await this.usuarioRepository.find({
    });
    // @ts-ignore
    return usuarios.map(usuario => usuario);
  }

  async showOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({where: {id}});
    // @ts-ignore
    return usuario;
  }

  async cadastrar(data: UsuarioDTO) {
    const { cpf } = data;
    let usuario = await this.usuarioRepository.findOne({ where: { cpf } });
    if (usuario) {
      throw new HttpException('Usuário já existe', HttpStatus.BAD_REQUEST);
    }
    usuario = await this.usuarioRepository.create(data);
    await this.usuarioRepository.save(usuario);
        // @ts-ignore
    return usuario;
  }

  /* async read(usuarioname: string) {
    const usuario = await this.usuarioRepository.findOne({
      where: { usuarioname },
      relations: ['ideas', 'bookmarks'],
    });
    return usuario.toResponseObject(false);
  }

  async login(data: UsuarioDTO) {
    const { usuarioname, password } = data;
    const usuario = await this.usuarioRepository.findOne({ where: { usuarioname } });
    if (!usuario || !(await usuario.comparePassword(password))) {
      throw new HttpException(
        'Invalid usuarioname/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return usuario.toResponseObject();
  }

   */
}
