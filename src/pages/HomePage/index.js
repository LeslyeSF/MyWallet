import {ScreenHome, Title, Options} from "./style";
import RegistrationBox from "../../components/RegistrationBox";
import ButtonOut from "../../components/ButtonOut";
import PlusIcon from "../../components/PlusIcon";
import MinusIcon from "../../components/MinusIcon";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function HomePage(){
  //Verificar se existe token
  //Se sim: 
  useEffect(()=>{
    const config = {
      headers:{
        "Authorization": `Barer token`
      }
    };
    const promise = axios.get("http://localhost:5000/dates", config);
    promise.then((answer)=>{
      console.log(answer.data);
    });
    promise.catch((err)=>{
      console.log(err.response);
    });
  },[]);
  //se nao: redireciona para pagina login 

  return(
    <ScreenHome>
      <Title>
        <p>Olá, Fulano</p>
        <ButtonOut/>
      </Title>
      <RegistrationBox/>
      <Options>
        <Link to="/entrada" style={{textDecoration:"none"}}>
          <div>
            <PlusIcon/>
            <p>Nova <br/> entrada</p>
          </div>
        </Link>
        <Link to="/saida" style={{textDecoration:"none"}}>
          <div>
            <MinusIcon/>
            <p>Nova <br/> saída</p>
          </div>
        </Link>
      </Options>
    </ScreenHome>
  );
}

