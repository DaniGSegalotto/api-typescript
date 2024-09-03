import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios: Usuario[] = await AppDataSource.getRepository(Usuario).find()
        res.status(200).json(usuarios);
    } catch {
        res.status(500).send("Erro Interno");
    }
}