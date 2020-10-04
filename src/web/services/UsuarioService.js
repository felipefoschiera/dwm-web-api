import http from './http-common';

class UsuarioService {
    listar() {
        return http.get('/usuarios');
    }

    obterPeloId(id) {
        return http.get(`/usuarios/${id}`);
    }

    incluir(data) {
        return http.post("/usuarios", data);
    }
    alterar(data) {
        return http.put(`/usuarios/`, data);
    }
    excluir(id) {
        return http.delete(`/usuarios/${id}`);
    }
    filtrar(filtro) {
        return http.get(`/usuarios/filtro/${filtro}`);
    }
}
export default new UsuarioService();
