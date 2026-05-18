import express from 'express'
import { refriService } from '../service/refriService.js';

export const refriRoute = express.Router();

// get all
refriRoute.get('/', async (req, res) => {
    try {
        const result = await refriService.getAllrefris();
        res.json(result);
    } catch (error) {
        console.error('Erro ao listar refrigerantes:', error);
        res.status(500).json({ error: 'Erro ao listar refrigerantes' });
    }
});