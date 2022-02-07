import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Swal from "sweetalert2";
import UserContext from "../../contexts/UserContext";
import { submitRecord } from "../../services/apiService";
import { tokenVerify } from "../../services/tokenService";
import {ScreenInput, Title} from "./style";

export default function InputPage(){
  const {token} = useContext(UserContext);
  const [value, setValue] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  
  useEffect(()=>tokenVerify(navigate, token),[]);

  function handleSubmitRecord(e){
    e.preventDefault();
    const body = {
      description: description,
      value: value,
      status: "input"
    };
    const promise = submitRecord(body, token);
    promise.then(()=>{
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
    <ScreenInput>
      <Title>Nova Entrada</Title>
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
        <button type="submit">Salvar entrada</button>
      </form>
    </ScreenInput>
  );
}
