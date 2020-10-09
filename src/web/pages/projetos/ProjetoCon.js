import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ProjetoService from '../../services/ProjetoService';

import ProjetoList from './ProjetoList';
import ProjetoForm from './ProjetoForm';

const ProjetoCon = () => {

  const listarProjetos = () => {
    ProjetoService.listar()
      .then(response => {
        setProjetos(response.data);
      })
      .catch(e => {
        toast.error(e);
      });
  }

  useEffect(() => {
    listarProjetos();

  }, []);

  const [editando, setEditando] = useState(false);
  const projetosList = [
  ]

  const [projetos, setProjetos] = useState(projetosList);
  
  const initProjeto = { _id: null, titulo: '', descricao: '', dataInicio: '',
                        dataTermino: '', nomeDemandante: '', emailDemandante: '' }
  const [projeto, setProjeto] = useState(initProjeto);

  function TelaAtiva(props){
    if(editando){
      return <ProjetoForm projeto={projeto} inserirProjeto={inserirProjeto} alterarProjeto={alterarProjeto} cancelar={cancelar} />
    } 
    return <ProjetoList projetos={projetos} excluirProjeto={excluirProjeto} editarProjeto={editarProjeto} />
  }


  const editarProjeto = (id) => {
    setEditando(true);
    if(id === null){
      setProjeto(initProjeto);
    }else{
      setProjeto(projetos.filter((projeto) => projeto._id === id)[0])
    }
  }

  const alterarProjeto = (alterado) => {
    ProjetoService.alterar(alterado).then(response => {
      toast.success("Alterado com sucesso");
      listarProjetos();
      setEditando(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const inserirProjeto = (projeto) => {
    ProjetoService.incluir(projeto).then(response => {
      toast.success("Incluido com sucesso");
      listarProjetos();
      setEditando(false);
    }).catch(e => {
      toast.error(e);
    });
  }

  const excluirProjeto = (id) => {
    ProjetoService.excluir(id).then(response => {
      listarProjetos();
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
      <h1>CRUD de Projetos </h1>
      <div className="flex-row">
        <div className="flex-large">
          <ToastContainer />
          <TelaAtiva />
        </div>
      </div>
    </div>
  );
}

export default ProjetoCon;
