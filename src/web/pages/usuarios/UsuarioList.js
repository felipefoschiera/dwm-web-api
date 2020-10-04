import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const UsuarioList = (props) => (
    <div>
      <button className="button muted-button" onClick={() => props.editarUsuario(null)}>Novo</button>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          { props.usuarios.length > 0 ? (props.usuarios.map((o) => (
            <tr key={o._id}>
              <td>{o.nome}</td>
              <td>{o.email}</td>
              <td>{o.celular}</td>
              <td>
                <button className="button muted-button"
                  onClick={() => props.editarUsuario(o._id)}>Editar</button>
                <button className="button muted-button"
                    onClick={() => props.excluirUsuario(o._id)}>Excluir</button>
              </td>
            </tr>

          ))) : (
            <tr>
              <td colSpan={3}>Nenhum usuário.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
)
export default UsuarioList;
