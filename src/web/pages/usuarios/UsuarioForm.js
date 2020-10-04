import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const UsuarioForm = (props) => {

  useEffect(() => {
    if(props.usuario != null)
        setUsuario(props.usuario);
    
  }, [props.usuario]);

  const initialFormState = { _id: null, nome: '', email: '', celular: ''} 
  const [usuario, setUsuario] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  }


 return (
    <form 
      onSubmit={(event) => {
        event.preventDefault();
        if(usuario._id === null){
          props.inserirUsuario(usuario);
        }else{ 
          props.alterarUsuario(usuario);
        }
        setUsuario(initialFormState);
      }}>
      <label>Nome</label>
      <input type="text" name="nome" value={usuario.nome} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="email" value={usuario.email} onChange={handleInputChange} />
      <br/>
      <label>Celular</label>
      <input type="text" name="celular" value={usuario.celular} onChange={handleInputChange} />
      
      <div>
      <button>Salvar</button>
      <button style={{backgroundColor: 'red'}} type="button" onClick={props.cancelar}>Cancelar</button>
      </div>
    </form>
 )
}

export default UsuarioForm;