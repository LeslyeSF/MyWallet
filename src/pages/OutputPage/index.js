import {ScreenOutput, Title} from "./style";

export default function OutputPage(){
  return(
    <ScreenOutput>
      <Title>Nova saída</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Salvar saída</button>
      </form>
    </ScreenOutput>
  );
}
