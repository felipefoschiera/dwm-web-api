import http from './http-common';

class ProjetoService {
    listar() {
        return http.get('/projetos');
    }

    obterPeloId(id) {
        return http.get(`/projetos/${id}`);
    }

    incluir(data) {
        return http.post("/projetos", data);
    }
    alterar(data) {
        return http.put(`/projetos/`, data);
    }
    excluir(id) {
        return http.delete(`/projetos/${id}`);
    }
    filtrar(filtro) {
        return http.get(`/projetos/filtro/${filtro}`);
    }
}
export default new ProjetoService();
