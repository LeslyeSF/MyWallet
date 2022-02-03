import { Link } from "react-router-dom";

import { ScreenSignIn, LinkStyled } from "./style";
import Logo from "../../components/Logo";

export default function SignInPage(){
  return(
    <ScreenSignIn>
      <Logo/>
      <form>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
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
