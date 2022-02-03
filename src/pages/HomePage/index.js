import {ScreenHome, Title, Options} from "./style";
import RegistrationBox from "../../components/RegistrationBox";
import ButtonOut from "../../components/ButtonOut";
import PlusIcon from "../../components/PlusIcon";
import MinusIcon from "../../components/MinusIcon";

import { Link } from "react-router-dom";

export default function HomePage(){
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

