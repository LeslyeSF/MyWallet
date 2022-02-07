import {ScreenHome, Title, Options} from "./style";
import RegistrationBox from "../../components/RegistrationBox";
import ButtonOut from "../../components/ButtonOut";
import PlusIcon from "../../components/PlusIcon";
import MinusIcon from "../../components/MinusIcon";
import UserContext from "../../contexts/UserContext";
import { tokenVerify } from "../../services/tokenService";
import { getData } from "../../services/apiService";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function HomePage(){
  const {token} = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name:"",
    records: []
  });
  
  useEffect(()=>{
    tokenVerify(navigate, token);
    
    const promise = getData(token);
    promise.then((answer)=>{
      setData(answer.data);
    });
    promise.catch((err)=>{
      console.log(err.response);
    });
  },[]);
  
  return(
    <ScreenHome>
      <Title>
        <p>Olá, {data.name}</p>
        <ButtonOut/>
      </Title>
      <RegistrationBox records={data.records} setDate={setData}/>
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

