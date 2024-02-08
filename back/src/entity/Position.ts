import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Position{
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        length: 5
    })
    asset: string;
    @Column({type: 'real'})
    quantity: number;
    @Column({type: 'real'})
    buy_price: number;
    @Column({type: 'real'})
    actual_price: number;
    @Column({
        type: 'real',
        nullable: true,
})
    sold_price: number;
    @Column({
        nullable: true
    })
    date_buy: Date;
    @Column({
        nullable: true
    })
    date_sell: Date;
}
