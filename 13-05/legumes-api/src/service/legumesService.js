import pool from '../config/db.js'

//aqui tem que ter aql negocio de try e catch

class legumesService {

    async getAlllegumes() {
        try {
            const result = await pool.query(
                'SELECT * FROM legumes'
            )       
            
        } catch (error) { 
            console.error('Erro ao listar legumes:', error);
            throw new Error('Erro ao listar legumes');
        }
    }

    async getByIdlegumes(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM legumes',
                [id]
            )  
        } catch (error) {
            console.error('Erro ao buscar legumes:', error);
            throw new Error('Erro ao buscar legumes');
        }
    }

    async createlegumes(nome) {
        try {
            const result = await pool.query(
                'INSERT INTO legumes (nome) VALUES ($1) RETURNING *',
                [nome]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao criar legumes:', error);
            throw new Error('Erro ao criar legumes');
        }
    }

    async updatelegumes(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE legumes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar legumes:', error);
            throw new Error('Erro ao atualizar legumes');
        }
    }

    async putlegumes(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE legumes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar legumes:', error);
            throw new Error('Erro ao atualizar legumes');
        }
    }

    async patchlegumes(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE legumes SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            )
            return result.rows[0]
        } catch (error) {
            console.error('Erro ao atualizar legumes:', error);
            throw new Error('Erro ao atualizar legumes');
        }
    }

    async deletelegumes(id) {
        try {
            await pool.query(
                'DELETE FROM legumes WHERE id = $1',
                [id]
            )
            return { message: 'Legume deletado com sucesso' }
        } catch (error) {
            console.error('Erro ao deletar legume:', error);
            throw new Error('Erro ao deletar legume');
        }
    } 
}

export default new legumesService()