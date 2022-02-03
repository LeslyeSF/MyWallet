import {ScreenOutput, Title} from "./style";

export default function EditInputPage(){
  return(
    <ScreenOutput>
      <Title>Editar entrada</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Atualizar entrada</button>
      </form>
    </ScreenOutput>
  );
}