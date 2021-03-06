import { ScreenSignUp, LinkStyled } from "./style";
import Logo from "../../components/Logo";
import { tokenVerifyLocalStorage } from "../../services/tokenService";
import UserContext from "../../contexts/UserContext";
import { signUp } from "../../services/apiService";
import { errorMessage } from "../../services/messageService";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";

export default function SignUpPage(){
  const navigate = useNavigate();
  const {setToken} = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(()=>tokenVerifyLocalStorage(navigate, setToken),[]);
  
  function handleSetForm(e, type){
    if(type==="email"){
      form.email = e.target.value;
    } else if(type === "name"){
      form.name = e.target.value;
    }else if(type === "password"){
      form.password = e.target.value;
    } else {
      form.confirmPassword = e.target.value;
    }
    setForm({...form});
  }

  function handleRegister(e){
    e.preventDefault();
    if(form.password === form.confirmPassword){
      const body = {
        name: form.name,
        email: form.email,
        password: form.password
      };
      const promise = signUp(body);
      promise.then(()=>{
        navigate("/");
      });
      promise.catch((err)=>{
        errorMessage("Ocorreu um erro no cadastro!");
        console.log(err.response);
      });
    } else{
        errorMessage("As senhas registradas são diferentes!");
    }
  }
  
  return(
    <ScreenSignUp>
      <Logo/>
      <form onSubmit={e=>handleRegister(e, form)}>
        <input 
        type="text" 
        placeholder="Nome" 
        value={form.name} 
        onChange={e=> handleSetForm(e,"name")}/>
        <input 
        type="email" 
        placeholder="Email" 
        value={form.email} 
        onChange={e=> handleSetForm(e,"email")}/>
        <input 
        type="password" 
        placeholder="Senha" 
        minLength={"8"} 
        value={form.password} 
        onChange={e=> handleSetForm(e,"password")}/>
        <input 
        type="password" 
        placeholder="Confirme a senha"
        minLength={"8"} 
        value={form.confirmPassword} 
        onChange={e=> handleSetForm(e,"confirmPassword")}/>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/" style={{textDecoration:"none"}}>
        <LinkStyled>
          Já tem uma conta? Entre agora!
        </LinkStyled>
      </Link>
      
    </ScreenSignUp>
  );
}
