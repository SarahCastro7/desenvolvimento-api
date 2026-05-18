import { pool } from "../config/db.js";

//no service precisa ter o try e o catch para tratar os erros, e o throw para lançar o erro para o controller

class RefriService {

    async getAllrefris() {
        try {
            const result = await pool.query(
                'SELECT * FROM refrigerantes'
            )       
            return result.rows;
        } catch (error) { 
            console.error('Erro ao listar refrigerantes:', error);
            throw new Error('Erro ao listar refrigerantes');
        }
    }

    async getByIdrefris(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM refrigerantes WHERE id = $1',
                [id]
            )  
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar refrigerantes:', error);
            throw new Error('Erro ao buscar refrigerantes');
        }
    }

    async createrefris(nome) {
        try {
            const result = await pool.query(
                'INSERT INTO refrigerantes (nome) VALUES ($1) RETURNING *',
                [nome]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao criar refrigerantes:', error);
            throw new Error('Erro ao criar refrigerantes');
        }
    }

    async updaterefris(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE refrigerantes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar refrigerantes:', error);
            throw new Error('Erro ao atualizar refrigerantes');
        }
    }

    async putrefris(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE refrigerantes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar refrigerantes:', error);
            throw new Error('Erro ao atualizar refrigerantes');
        }
    }

    async patchrefris(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE refrigerantes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar refrigerantes:', error);
            throw new Error('Erro ao atualizar refrigerantes');
        }
    }

    async deleterefris(id) {
        try {
            await pool.query(
                'DELETE FROM refrigerantes WHERE id = $1',
                [id]
            )
            return { message: 'Refrigerante deletado com sucesso' }
        } catch (error) {
            console.error('Erro ao deletar refrigerante:', error);
            throw new Error('Erro ao deletar refrigerante');
        }
    } 
}

export const refriService = new RefriService()