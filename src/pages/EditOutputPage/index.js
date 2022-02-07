import { useContext, useEffect } from "react";
import {ScreenOutput, Title} from "./style";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import { tokenVerify } from "../../services/tokenService";

export default function EditOutputPage(){
  const {token} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=>tokenVerify(navigate, token), []);
  
  return(
    <ScreenOutput>
      <Title>Editar saída</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Atualizar saída</button>
      </form>
    </ScreenOutput>
  );
}
