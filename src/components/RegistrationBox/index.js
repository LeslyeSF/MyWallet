import axios from "axios";
import { useContext } from "react";
import { Registrationbox, List, Value, Info, Balance, Total } from "./style";
import UserContext from "../../contexts/UserContext";
import Swal from "sweetalert2";
import { deleteRecord } from "../../services/apiService";

export default function RegistrationBox({records}){
  const {token} = useContext(UserContext);

  let balance ="";
  if(records.length > 0){
    records = records.map((date)=>{
      return(
        <div>
            <Info><span>{date.day}</span> {date.description}</Info>
            <Value status={date.status}>
              {date.value} 
              <span onClick={()=> handleDeleteRecord(date.idRecord)}>x</span>
            </Value>
        </div>
      );
    });
    balance = <Balance>
    <p>SALDO</p>
    <Total>19999</Total>
  </Balance>;
  }
  function handleDeleteRecord(id){
    const promise = deleteRecord(token,id);
    promise.then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Oba..',
        text: 'Registro deletado com sucesso!'
      });
    });
    promise.catch((err)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao deletar o registro!'
      });
    });
  }
  return(
    <Registrationbox records={(records.length > 0)}>
      <List>
        {(records.length > 0) ? records : <span>Não há registros de <br/>entrada ou saída</span>}
      </List>
      {balance}
    </Registrationbox>
  );
}
