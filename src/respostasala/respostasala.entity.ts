import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { SalaEntity } from 'src/sala/sala.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Entity( 'respostaSala' )
export class RespostaSalaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany( type => RespostaSalaEntity, comentario => comentario.resposta )
    comentarios: RespostaSalaEntity[];

    @ManyToOne( type => RespostaSalaEntity )
    resposta: RespostaSalaEntity;

    @ManyToOne( type => UsuarioEntity )
    usuario: UsuarioEntity;

    @ManyToOne(type => SalaEntity )
    sala: SalaEntity;

    @CreateDateColumn()
    horarioResposta: Date;

    @Column( {
        type: 'text',
    } )
    texto: string;

    @Column( {
        type: 'integer',
    } )
    salaId: number;

    @Column( {
        type: 'integer',
        nullable: true,
    } )
    respostaId: number;

    @Column( {
        type: 'integer',
    } )
    usuarioId: number;
}
