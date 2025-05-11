import { consult } from "../database/conexao.js"

class SelecaoRepository{
    // CRUD
    create(selecao){
        const sql = "INSERT INTO estoque SET ?;"
        return consult(sql, selecao, "Erro ao inserir!")
    }
    findAll(){
        const sql = "SELECT * FROM estoque;"
        return consult(sql, 'Erro ao encontrar!')
    }

    findById(id){
        const sql = "SELECT * FROM estoque WHERE id = ?"
        return consult(sql, id, 'Erro ao encontrar!') 
        
    }
    updadeById(selecao, id){
        const sql = "UPDATE estoque SET ? WHERE id = ?;"
        return consult(sql, [selecao, id], "Erro ao atualizar!")
    }
    deleteById(id){
        const sql = "DELETE FROM estoque WHERE id = ?"
        return consult(sql, id, 'Erro ao deletar!')
    }

}

export default new SelecaoRepository;