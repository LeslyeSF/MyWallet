import { useContext } from "react";
import { Registrationbox, List, Value, Info, Balance, Total } from "./style";
import UserContext from "../../contexts/UserContext";
import { deleteRecord, getData } from "../../services/apiService";
import { errorMessage, successMessage } from "../../services/messageService";
import { useNavigate } from "react-router";

export default function RegistrationBox({records, setDate}){
  const {token, setRecord} = useContext(UserContext);
  const navigate = useNavigate();

  let balance ="", total = 0;
  if(records.length > 0){
    records = records.map((date)=>{
      let aux = parseFloat(date.value.replace(",","."));
      if(date.status === "input"){
        total = total + aux;
      }else{
        total = total - aux;
      }
      return(
        <div>
            <Info onClick={()=> handleEditRecord(date.idRecord,date.value,date.description,date.status )}>
              <span>{date.day}</span> 
              {date.description}
            </Info>
            <Value status={date.status}>
              {date.value} 
              <span onClick={()=> handleDeleteRecord(date.idRecord)}>x</span>
            </Value>
        </div>
      );
    });
    balance = <Balance><p>SALDO</p><Total total={total}>{total.toFixed(2)}</Total></Balance>;
  }

  function handleEditRecord(id, value, description, status){
    const record = {
      idRecord: id,
      description: description,
      value: value,
      status: status
    };
    setRecord(record);
    if(status === "output"){
      navigate("/editarsaida");
    }else{
      navigate("/editarentrada");
    }
  }
  
  function handleDeleteRecord(id){
    const promise = deleteRecord(token,id);
    promise.then(()=>{
      successMessage("Registro deletado com sucesso!");
      const promise = getData(token);
      promise.then((answer)=>{
        setDate(answer.data);
      });
      promise.catch((err)=>{
        errorMessage("Falha ao atualizar a página!");
        console.log(err.response);
      });
    });
    promise.catch((err)=>{
      errorMessage("Ocorreu um erro ao deletar o registro!");
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
