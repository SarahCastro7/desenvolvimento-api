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

//get by id
refriRoute.get('/:id', async (req, res) => {
    try {
        const result = await refriService.getByIdrefris(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar refrigerantes:', error);
        res.status(500).json({ error: 'Erro ao buscar refrigerantes' });
    }
});

// post
refriRoute.post('/', async (req, res) => {
    try {
        const result = await refriService.createrefris(req.body.nome);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar refrigerantes:', error);
        res.status(500).json({ error: 'Erro ao criar refrigerantes' });
    }
});

//put
refriRoute.put('/:id', async (req, res) => {
    try {
        const result = await refriService.updaterefris(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar refrigerantes:', error);
        res.status(500).json({ error: 'Erro ao atualizar refrigerantes' });
    }  
});

//patch
refriRoute.patch('/:id', async (req, res) => {
    try {
        const result = await refriService.patchrefris(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar refrigerantes:', error);
        res.status(500).json({ error: 'Erro ao atualizar refrigerantes' });
    }
});

// delete
refriRoute.delete('/:id', async (req, res) => {
    try {
        const result = await refriService.deleterefris(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao deletar refrigerante:', error);
        res.status(500).json({ error: 'Erro ao deletar refrigerante' });
    }
});