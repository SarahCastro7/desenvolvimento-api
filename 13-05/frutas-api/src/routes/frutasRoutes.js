import express from 'express'
import frutasService from '../service/frutasService.js';

export const frutasRoute = express.Router();

// get all
frutasRoute.get('/', async (req, res) => {
    try {
        const result = await frutaService.getAllfrutas();
        res.json(result);
    } catch (error) {
        console.error('Erro ao listar frutas:', error);
        res.status(500).json({ error: 'Erro ao listar frutas' });
    }
});

// get by id
frutasRoute.get('/:id', async (req, res) => {
    try {
        const result = await frutasService.getByIdfrutas(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar frutas    :', error);
        res.status(500).json({ error: 'Erro ao buscar frutas' });
    }
});

// post
frutasRoute.post('/', async (req, res) => {
    try {
        const result = await frutasService.createfrutas(req.body.nome);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar frutas:', error);
        res.status(500).json({ error: 'Erro ao criar frutas' });
    }
});

// put
frutasRoute.put('/:id', async (req, res) => {
    try {
        const result = await frutasService.updatefrutas(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar frutas:', error);
        res.status(500).json({ error: 'Erro ao atualizar frutas' });
    }  
});

// patch
frutasRoute.patch('/:id', async (req, res) => {
    try {
        const result = await frutasService.patchfrutas(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar frutas:', error);
        res.status(500).json({ error: 'Erro ao atualizar frutas' });
    }
});

// delete
frutasRoute.delete('/:id', async (req, res) => {
    try {
        const result = await frutasService.deletefrutas(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao deletar frutas:', error);
        res.status(500).json({ error: 'Erro ao deletar frutas' });
    }
});