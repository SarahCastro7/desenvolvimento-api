import { pool } from '../config/db.js';
import 'dotenv/config'
//aqui tem que ter aql negocio de try e catch

class frutasService {

    async getAllfrutas() {
        try {
            const result = await pool.query(
                'SELECT * FROM frutas'
            )       
            
        } catch (error) { 
            console.error('Erro ao listar frutas:', error);
            throw new Error('Erro ao listar frutas');
        }
    }

    async getByIdfrutas(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM frutas',
                [id]
            )  
        } catch (error) {
            console.error('Erro ao buscar frutas:', error);
            throw new Error('Erro ao buscar frutas');
        }
    }

    async createfrutas(nome) {
        try {
            const result = await pool.query(
                'INSERT INTO frutas (nome) VALUES ($1) RETURNING *',
                [nome]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao criar frutas:', error);
            throw new Error('Erro ao criar frutas');
        }
    }

    async updatefrutas(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar frutas:', error);
            throw new Error('Erro ao atualizar frutas');
        }
    }

    async putfrutas(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar frutas:', error);
            throw new Error('Erro ao atualizar frutas');
        }
    }

    async patchfrutas(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar frutas:', error);
            throw new Error('Erro ao atualizar frutas');
        }
    }

    async deletefrutas(id) {
        try {
            await pool.query(
                'DELETE FROM frutas WHERE id = $1',
                [id]
            )
            return { message: 'fruta deletada com sucesso' }
        } catch (error) {
            console.error('Erro ao deletar fruta:', error);
            throw new Error('Erro ao deletar fruta');
        }
    } 
}

export default new frutasService()