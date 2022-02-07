import { useContext, useEffect } from "react";
import { tokenVerify } from "../../services/tokenService";
import {ScreenOutput, Title} from "./style";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function EditInputPage(){
  const {token} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=>tokenVerify(navigate, token), []);
  
  return(
    <ScreenOutput>
      <Title>Editar entrada</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Atualizar entrada</button>
      </form>
    </ScreenOutput>
  );
}