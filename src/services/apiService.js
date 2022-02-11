import axios from "axios";

const BASE_URL="https://mywallet80.herokuapp.com";

function createConfig(token){
  const config = {
    headers:{
      "Authorization": `Bearer ${token}`
    }
  };
  return config;
}
export function login(body){
  const promise = axios.post(`${BASE_URL}/login`, body);
  return promise;
}
export function signUp(body){
  const promise = axios.post(`${BASE_URL}/register`, body);
  return promise;
}
export function getData(token){
  const config = createConfig(token);
  
  const promise = axios.get(`${BASE_URL}/data`, config);

  return promise;
}
export function submitRecord(body,token){
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/records`,body,config);
  return promise;
}
export function deleteSession(token){
  const config = createConfig(token);
  const promise = axios.delete(`${BASE_URL}/endsession`,config);
  return promise;
}
export function deleteRecord(token,id){
  const config = createConfig(token);
  const promise = axios.delete(`${BASE_URL}/deleterecord?idRecord=${id}`, config);
  return promise;
}
export function editRecord(body, token){
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/editrecord`, body, config);
  return promise;
}