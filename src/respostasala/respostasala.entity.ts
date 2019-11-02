import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('respostaSala')
export class RespostaSalaEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        type: 'timestamp',
    })
    horarioResposta: Date;

    @Column({
        type: 'text',
    })
    texto: string;
}
