import express from "express";
import { frutasService } from "../services/frutasServices.js";

const routefrutas = express.Router();

routefrutas.get("/", async (req, res) => {
    const fruta = await frutasService.getAll();
    res.json(fruta);
});

routefrutas.get("/:id", async (req, res) => {
    const { id } = req.params;

    const fruta = await frutasService.getById(id);

    if (!fruta) {
        return res.status(404).json({ message: "Fruta não encontrada." });
    }
    res.json(fruta);
});


routefrutas.post("/", async (req, res) => {

    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            message: "nome obrigatório"
        });
    }

    const fruta = await frutasService.create(nome);

    res.status(201).json(fruta);
});

routefrutas.patch("/:id", async (req, res) => {
    
    const { id } = req.params
    const frutaAtualizada = await frutasService.updateFruta(id, req.body);

    if (!frutaAtualizada) {
        return res.status(404).json({ message: "Fruta não encontrada." });
    }

    res.json(frutaAtualizada);
});

routefrutas.put("/:id", async (req, res) => {
    const { id } = req.params;

    const frutaAtualizada = await frutasService.updateFruta(id, {
        nome: nome.trim(),
        quantidade: quantidade.trim()
    });

    if (!frutaAtualizada) {
        return res.status(404).json({ message: "Fruta não encontrada." });
    }

    res.json(frutaAtualizada);
});

routefrutas.delete("/:id", async (req, res) => {

    const { id } = req.params;
    const removido = await frutasService.deleteFruta(id);
    // Mensagem de erro em JSON caso não encontre

    if (!removido) {
        return res.status(404).json({
            message: "Erro: fruta não encontrada para remoção."
        });
    }

    // Retorna mensagem confirmando a remoção (Status 200 para permitir corpo JSON)
    res.status(200).json({ message: "Fruta removida com sucesso." });
});

export default routefrutas;