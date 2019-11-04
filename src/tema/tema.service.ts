import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TemaEntity } from './tema.entity';
import { TemaDTO } from './tema.dto';

@Injectable()
export class TemaService {
    constructor(
        @InjectRepository( TemaEntity )
        private temaRepository: Repository<TemaEntity>,
    ) { }

    async showAll () {
        const temas = await this.temaRepository.find( {} );
        // @ts-ignore
        return temas.map( tema => tema );
    }

    async cadastrar ( data: TemaDTO ) {
        const { nome } = data;
        let tema = await this.temaRepository.findOne( {
            where: { nome },
        } );

        if ( tema ) {
            throw new HttpException( 'Tema já existe', HttpStatus.BAD_REQUEST );
        }
        tema = await this.temaRepository.create( data );
        await this.temaRepository.save( tema );
        // @ts-ignore
        return tema;
    }
}
