import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';
import Axios from 'axios';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async showAll() {
    const usuarios = await this.usuarioRepository.find({});
    return usuarios.map(usuario => usuario);
  }

  async showOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    return usuario;
  }

  async buscarPorPapel(papel: string) {
    const usuarios = await this.usuarioRepository.find({ where: { papel } });
    return usuarios.map(usuario => usuario);
  }

  async auth(cpf: string) {
    const usuario = await this.usuarioRepository.findOne({ where: { cpf } });
    if(usuario) {
      return usuario;
    }

    return {};
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

  async importarUsuarios() {
    let usuarios: any[] = [];
    let ret: any[] = [];

    await Axios.get(
      'https://my-json-server.typicode.com/csclsys/db-repository/usuarios',
    ).then(res => {
      usuarios = res.data;
    });

    for (let usuario of usuarios) {
      const { nome, sobrenome, cpf, matricula, papel } = usuario;

      ret.push(
        await this.cadastrar({
          nome,
          sobrenome,
          cpf,
          matricula,
          papel,
        }),
      );
    }

    return ret;
  }
}
