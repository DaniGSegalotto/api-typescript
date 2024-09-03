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


export const postUsuario = async (req: Request, res: Response) => {
    try {
        const usuario: Usuario[] = AppDataSource.getRepository(Usuario).create(req.body)
        const response: Usuario[] = await AppDataSource.getRepository(Usuario).save(usuario)
        res.status(200).send(response);
    } catch {
        res.status(500).send("Erro Interno");
    }
}


export const getUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const usuarios: Usuario = await AppDataSource.getRepository(Usuario).findOneBy({id: id})
        res.status(200).send(usuarios);
    } catch {
        res.status(500).send("Erro Interno");
    }
}


export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const result = await AppDataSource.getRepository(Usuario).delete(id)
        res.status(200).json(result);
    } catch {
        res.status(500).send("Erro Interno");
    }
}


export const putUsuario = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id
        const usuario: Usuario = await AppDataSource.getRepository(Usuario).findOneBy({id: id})
        AppDataSource.getRepository(Usuario).merge(usuario, req.body)
        const result = await AppDataSource.getRepository(Usuario).save(usuario)
        res.status(200).json(result);
    } catch {
        res.status(500).send("Erro Interno");
    }
}