import axios from "axios";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../../contexts/UserContext";
import { submitRecord } from "../../services/apiService";
import { tokenVerify } from "../../services/tokenService";
import {ScreenOutput, Title} from "./style";

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
      Swal.fire({
        icon: 'success',
        title: 'Eba..',
        text: 'Registro feito com sucesso!'
      });
      navigate("/home");
    });
    promise.catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro no cadastro do registro!'
      });
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
        required/>
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
