import { ScreenSignIn, LinkStyled } from "./style";
import Logo from "../../components/Logo";
import UserContext from "../../contexts/UserContext";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {tokenVerifyLocalStorage} from "../../services/tokenService";
import { login } from "../../services/apiService";


export default function SignInPage(){
  const navigate = useNavigate();
  const {setToken} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> tokenVerifyLocalStorage(navigate, setToken),[]);

  function handleLogin(e){
    e.preventDefault();
    const body = {
      email: email,
      password: password
    }
    const promise = login(body);
    promise.then((answer)=>{
      setToken(answer.data.token);
      localStorage.setItem("MyWallet_token", answer.data.token);
      navigate("/home");
    });
    promise.catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro no Login!'
      });
      console.log(err);
    });    
  }
  return(
    <ScreenSignIn>
      <Logo/>
      <form onSubmit={handleLogin}>
        <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e=> setEmail(e.target.value)}
        required/>
        <input 
        type="password" 
        placeholder="Senha" 
        value={password} 
        onChange={e=> setPassword(e.target.value)}
        required/>
        <button type="submit">Entrar</button>
      </form>
      <Link to="/signup" style={{textDecoration:"none"}}>
        <LinkStyled>
          Primeira vez? Cadastre-se!
        </LinkStyled>
      </Link>
      
    </ScreenSignIn>
  );
}
