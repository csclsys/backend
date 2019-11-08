import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { TemaEntity } from 'src/tema/tema.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { RespostaSalaEntity } from 'src/respostasala/respostasala.entity';

@Entity( 'sala' )
export class SalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => TemaEntity)
    tema: TemaEntity;

    @ManyToOne(type => UsuarioEntity)
    usuario: UsuarioEntity;

    @OneToMany( type => RespostaSalaEntity, respostaSala => respostaSala.sala )
    respostasSala: RespostaSalaEntity[];

    @Column( {
        type: 'text',
    } )
    descrPergunta: string;

    @Column( {
        type: 'text',
    } )
    tipo: string;

    @Column( {
        type: 'integer',
    } )
    usuarioId: number;

    @Column( {
        type: 'integer',
    } )
    temaId: number;

    @Column( {
        type: 'timestamp',
    } )
    dataAbertura: Date;

    @Column( {
        type: 'timestamp',
        nullable: true,
    } )
    dataFechamento: Date;
}
