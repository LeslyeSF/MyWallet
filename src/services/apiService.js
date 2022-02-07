import axios from "axios";

function createConfig(token){
  const config = {
    headers:{
      "Authorization": `Bearer ${token}`
    }
  };
  return config;
}
export function login(body){
  const promise = axios.post("http://localhost:5000/login", body);
  return promise;
}
export function signUp(body){
  const promise = axios.post("http://localhost:5000/register", body);
  return promise;
}
export function getData(token){
  const config = createConfig(token);
  
  const promise = axios.get("http://localhost:5000/data", config);

  return promise;
}
export function submitRecord(body,token){
  const config = createConfig(token);
  const promise = axios.post("http://localhost:5000/records",body,config);
  return promise;
}
export function deleteSession(token){
  const config = createConfig(token);
  const promise = axios.delete("http://localhost:5000/endsession",config);
  return promise;
}
export function deleteRecord(token,id){
  const config = createConfig(token);
  const promise = axios.delete(`http://localhost:5000/deleterecord?idRecord=${id}`, config);
  return promise;
}
export function editRecord(body, token){
  const config = createConfig(token);
  const promise = axios.post("http://localhost:5000/editrecord", body, config);
  return promise;
}