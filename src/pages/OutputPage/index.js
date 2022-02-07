import UserContext from "../../contexts/UserContext";
import { submitRecord } from "../../services/apiService";
import { errorMessage, successMessage } from "../../services/messageService";
import { tokenVerify } from "../../services/tokenService";
import {ScreenOutput, Title} from "./style";

import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OutputPage(){
  const {token} = useContext(UserContext);
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  let navigate = useNavigate();
  
  useEffect(()=>tokenVerify(navigate, token),[]);
  
  function handleSubmitRecord(e){
    e.preventDefault();
    const body = {
      description: description,
      value: value,
      status: "output"
    };
    const promise = submitRecord(body, token);
    promise.then(()=>{
      successMessage("Registro feito com sucesso!");
      navigate("/home");
    });
    promise.catch((err)=>{
      errorMessage("Ocorreu um erro no cadastro do registro!");
      console.log(err.response);
    });
  }

  return(
    <ScreenOutput>
      <Title>Nova saída</Title>
      <form onSubmit={handleSubmitRecord}>
      <input 
        type="text" 
        placeholder="Valor" 
        value={value} 
        onChange={e => setValue(e.target.value)}
        pattern={"[0-9]+\,[0-9]{2}$"}
        required/>
        <label>Padrão: 0,00</label>
        <input 
        type="text" 
        placeholder="Descrição" 
        value={description} 
        onChange={e=> setDescription(e.target.value)}
        required/>
        <button type="submit">Salvar saída</button>
      </form>
    </ScreenOutput>
  );
}
