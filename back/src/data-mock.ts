import "reflect-metadata"
import { DataSource } from "typeorm"
import { Position } from "./entity/Position"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: "pedri",
    password: "1234",
    database: "teste",
    synchronize: true,
    logging: false,
    entities: [Position],
    migrations: [],
    subscribers: [],
})
