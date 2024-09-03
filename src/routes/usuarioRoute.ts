import express from 'express';
import { getUsuarios } from '../controllers/usuarioController';

const router = express.Router();

router.get('/usuarios', getUsuarios);

export default router