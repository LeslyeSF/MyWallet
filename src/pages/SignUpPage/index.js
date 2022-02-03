import { Link } from "react-router-dom";

import { ScreenSignUp, LinkStyled } from "./style";
import Logo from "../../components/Logo";

export default function SignUpPage(){
  return(
    <ScreenSignUp>
      <Logo/>
      <form>
        <input type="text" placeholder="Nome"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <input type="password" placeholder="Confirme a senha"/>
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
