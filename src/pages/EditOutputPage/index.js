import {ScreenOutput, Title} from "./style";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import { tokenVerify } from "../../services/tokenService";
import { editRecord } from "../../services/apiService";
import { errorMessage, successMessage } from "../../services/messageService";

import { useContext, useEffect, useState } from "react";

export default function EditOutputPage(){
  const {token, Record} = useContext(UserContext);
  const navigate = useNavigate();
  const [value, setValue] = useState(Record.value);
  const [description, setDescription] = useState(Record.description);

  useEffect(()=>tokenVerify(navigate, token), []);

  function handleUpdateRecord(e){
    e.preventDefault();
    const update = {
      idRecord: Record.idRecord,
      description: description,
      value: value,
      status: Record.status
    };

    const promise = editRecord(update,token);
    promise.then(()=>{
      successMessage("Registro atualizado com sucesso!");
      navigate("/home");
    });
    promise.catch((err)=>{
      errorMessage("Erro ao atualizar o registro!");
      console.log(err.response);
      navigate("/home");
    });
  }
  
  return(
    <ScreenOutput>
      <Title>Editar saída</Title>
      <form onSubmit={handleUpdateRecord}>
        <input 
        type="text" 
        placeholder="Valor"
        required
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        pattern={"[0-9]+\,[0-9]{2}$"}/>
        <label>Padrão: 0,00</label>
        <input 
        type="text" 
        placeholder="Descrição"
        required
        value={description}
        onChange={e=> setDescription(e.target.value)}/>
        <button type="submit">Atualizar saída</button>
      </form>
    </ScreenOutput>
  );
}
