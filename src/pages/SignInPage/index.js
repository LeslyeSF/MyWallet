import { ScreenSignIn, LinkStyled } from "./style";
import Logo from "../../components/Logo";

import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router";

export default function SignInPage(){
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(e){
    e.preventDefault();
    const body = {
      email: email,
      password: password
    }
    const promise = axios.post("http://localhost:5000/login", body);
    promise.then((answer)=>{
      //navigate("/home");
      //Setar token para o contextAPI
      console.log(answer.data);
    });
    promise.catch(()=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro no Login!'
      });
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
