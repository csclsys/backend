import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('tema')
export class TemaEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        type: 'text',
    })
    nome: string;

    @Column({
        type: 'text',
    })
    situacao: string;

    @Column({
        type: 'timestamp',
    })
    dataInclusao: Date;

}
