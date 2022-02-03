import {ScreenInput, Title} from "./style";

export default function InputPage(){
  return(
    <ScreenInput>
      <Title>Nova Entrada</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Salvar entrada</button>
      </form>
    </ScreenInput>
  );
}
