import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import UsuarioService from '../../services/UsuarioService';

import UsuarioList from './UsuarioList';
import UsuarioForm from './UsuarioForm';

const UsuarioCon = () => {

  const listarUsuarios = () => {
    UsuarioService.listar()
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(e => {
        toast.error(e);
      });
  }

  useEffect(() => {
    listarUsuarios();

  }, []);

  const [editando, setEditando] = useState(false);
  const usuariosList = [
  ]

  const [usuarios, setUsuarios] = useState(usuariosList);
  
  const initUsuario = { _id: null, nome: '', email: '', celular: '' }
  const [usuario, setUsuario] = useState(initUsuario);

  function TelaAtiva(props){
    if(editando){
      return <UsuarioForm usuario={usuario} inserirUsuario={inserirUsuario} alterarUsuario={alterarUsuario} cancelar={cancelar} />
    } 
    return <UsuarioList usuarios={usuarios} excluirUsuario={excluirUsuario} editarUsuario={editarUsuario} />
  }


  const editarUsuario = (id) => {
    setEditando(true);
    if(id === null){
      setUsuario(initUsuario);
    }else{
      setUsuario(usuarios.filter((usuario) => usuario._id === id)[0])
    }
  }

  const alterarUsuario = (alterado) => {
    UsuarioService.alterar(alterado).then(response => {
      toast.success("Alterado com sucesso");
      listarUsuarios();
      setEditando(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const inserirUsuario = (usuario) => {
    UsuarioService.incluir(usuario).then(response => {
      toast.success("Incluido com sucesso");
      listarUsuarios();
      setEditando(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const excluirUsuario = (id) => {
    UsuarioService.excluir(id).then(response => {
      listarUsuarios();
      console.log(response.data);
    }).catch(e => {
      toast.error(e);
      console.log(e);
    });
  }

  const cancelar = () => {
    toast.info("Operação cancelada");
    setEditando(false);
  }


  return (
    <div className="container">
      <h1>CRUD de Usuários </h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <TelaAtiva />
        </div>
      </div>
    </div>
  );
}

export default UsuarioCon;
