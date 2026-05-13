import express from "express";
import { legumesService } from "../services/legumesServices.js";

const routeLegumes = express.Router();

routeLegumes.get("/", async (req, res) => {
    const legume = await legumesService.getAll();
    res.json(legume);
});


routeLegumes.get("/:id", async (req, res) => {
    const { id } = req.params;

    const legume = await legumesService.getById(id);

    if (!legume) {
        return res.status(404).json({ message: "Legume não encontrado." });
    }
    res.json(legume);
});


routeLegumes.post("/", async (req, res) => {

    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            message: "nome obrigatório"
        });
    }

    const legume = await legumesService.create(nome);

    res.status(201).json(legume);
});


routeLegumes.patch("/:id", async (req, res) => {
    
    const { id } = req.params
    const legumeAtualizado = await legumesService.updateLegume(id, req.body);

    if (!legumeAtualizado) {
        return res.status(404).json({ message: "Legume não encontrado." });
    }

    res.json(legumeAtualizado);
});


routeLegumes.put("/:id", async (req, res) => {
    const { id } = req.params;

    const legumeAtualizado = await legumesService.updateLegume(id, {
        nome: nome.trim(),
        quantidade: quantidade.trim()
    });

    if (!legumeAtualizado) {
        return res.status(404).json({ message: "Legume não encontrado." });
    }

    res.json(legumeAtualizado);
});


routeLegumes.delete("/:id", async (req, res) => {

    const { id } = req.params;
    const removido = await legumesService.deleteLegume(id);

    // Mensagem de erro em JSON caso não encontre
    if (!removido) {
        return res.status(404).json({
            message: "Erro: legume não encontrado para remoção."
        });
    }

    // Retorna mensagem confirmando a remoção (Status 200 para permitir corpo JSON)
    res.status(200).json({ message: "Legume removido com sucesso." });
});

export default routeLegumes;