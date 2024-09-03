import express from 'express';
import { getUsuarios, postUsuario, getUsuario, deleteUsuario, putUsuario } from '../controllers/usuarioController';

const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', postUsuario);
router.get('/usuarios/:id', getUsuario);
router.delete('/usuarios/:id', deleteUsuario);
router.put('/usuarios/:id', putUsuario);


export default router