import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Usuario } from "./entity/usuario";
import { Aluguel } from "./entity/aluguel";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
<<<<<<< HEAD
  entities: [Usuario, Aluguel],
=======
  entities: [__dirname+"/models/**/*.{js,ts}"],
>>>>>>> f922643cfc077fbc8e469e4918a4d0b633127157
  migrations: [],
  subscribers: [],
});
