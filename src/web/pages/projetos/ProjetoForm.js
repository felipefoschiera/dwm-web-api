import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ProjetoForm = (props) => {

  const classes = useStyles();

  useEffect(() => {
    if(props.projeto != null)
        setProjeto(props.projeto);
    
  }, [props.projeto]);

  const initialFormState = { _id: null, titulo: '', descricao: '', dataInicio: '', 
                             dataTermino: '', nomeDemandante: '', emailDemandante: '' } 
  const [projeto, setProjeto] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjeto({ ...projeto, [name]: value });
  }


 return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if(projeto._id === null){
          props.inserirProjeto(projeto);
        }else{ 
          props.alterarProjeto(projeto);
        }
        setProjeto(initialFormState);
      }}>
      <label>Título</label>
      <input type="text" name="titulo" value={projeto.titulo} onChange={handleInputChange} />
      <label>Descrição</label>
      <input type="text" name="descricao" value={projeto.descricao} onChange={handleInputChange} />
      <label>Data Início</label>
      <input type="text" name="dataInicio" value={projeto.dataInicio} onChange={handleInputChange} />
      <label>Data Término</label>
      <input type="text" name="dataTermino" value={projeto.dataTermino} onChange={handleInputChange} />
      <label>Nome Demandante</label>
      <input type="text" name="nomeDemandante" value={projeto.nomeDemandante} onChange={handleInputChange} />
      <label>Email Demandante</label>
      <input type="text" name="emailDemandante" value={projeto.emailDemandante} onChange={handleInputChange} />
      
      <div> 
      <Button type="submit" variant="contained" color="primary" size="small" className={classes.button} startIcon={<SaveIcon />}>Salvar</Button>
      <Button onClick={props.cancelar} variant="contained" color="secondary" size="small" className={classes.button} startIcon={<SaveIcon />}>Cancelar</Button>

      </div>
    </form>
 )
}

export default ProjetoForm;