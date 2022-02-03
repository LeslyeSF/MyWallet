import {ScreenOutput, Title} from "./style";

export default function EditOutputPage(){
  return(
    <ScreenOutput>
      <Title>Editar saída</Title>
      <form>
        <input type="text" placeholder="Valor"/>
        <input type="text" placeholder="Descrição"/>
        <button type="submit">Atualizar saída</button>
      </form>
    </ScreenOutput>
  );
}
