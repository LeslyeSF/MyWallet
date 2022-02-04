import { ScreenSignUp, LinkStyled } from "./style";
import Logo from "../../components/Logo";

import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import { useState } from "react";


export default function SignUpPage(){
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
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
  async function handleRegister(e){
    e.preventDefault();
    if(form.password === form.confirmPassword){
  
      try{
  
        const body = {
          name: form.name,
          email: form.email,
          password: form.password
        };
        await axios.post("http://localhost:5000/register", body);
        navigate("/");
  
      }catch{
  
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocorreu um erro no cadastro!'
        });
  
      }
  
    } else{
  
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas registradas são diferentes!'
      });
  
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
        value={form.password} 
        onChange={e=> handleSetForm(e,"password")}/>
        <input 
        type="password" 
        placeholder="Confirme a senha" 
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
