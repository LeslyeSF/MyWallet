import {ScreenHome, Title, Options} from "./style";
import RegistrationBox from "../../components/RegistrationBox";
import ButtonOut from "../../components/ButtonOut";
import PlusIcon from "../../components/PlusIcon";
import MinusIcon from "../../components/MinusIcon";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";
import { tokenVerify } from "../../services/tokenService";
import { getDates } from "../../services/apiService";

export default function HomePage(){
  const {token} = useContext(UserContext);
  const navigate = useNavigate();
  const [date, setDate] = useState({
    name:"",
    records: []
  });
  
  useEffect(()=>{
    tokenVerify(navigate, token);
    
    const promise = getDates(token);
    promise.then((answer)=>{
      setDate(answer.data);
    });
    promise.catch((err)=>{
      console.log(err.response);
    });
  },[]);

  return(
    <ScreenHome>
      <Title>
        <p>Olá, {date.name}</p>
        <ButtonOut/>
      </Title>
      <RegistrationBox records={date.records}/>
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

