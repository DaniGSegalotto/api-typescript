import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Aluguel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: Date
    
    @Column()
    tempoLocacao: number
    
    @Column()
    preco: number

}