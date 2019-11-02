import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from 'typeorm';

@Entity('sala')
export class SalaEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({
        type: 'text',
    })
    descrPergunta: string;

    @Column({
        type: 'text',
    })
    tipo: string;

    @Column({
        type: 'timestamp',
    })
    dataAbertura: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
    })
    dataFechamento: Date;
}
