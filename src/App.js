import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";
import EditInputPage from "./pages/EditInputPage";
import EditOutputPage from "./pages/EditOutputPage";
import GlobalStyle from "./styles";
import UserContext from './contexts/UserContext';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){
  const [Record, setRecord] = useState("");
  const [token, setToken] = useState(undefined);
  
  return(
    <UserContext.Provider value={{Record, setRecord, token, setToken}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/entrada" element={<InputPage/>}/>
          <Route path="/saida" element={<OutputPage/>}/>
          <Route path="/editarentrada" element={<EditInputPage/>}/>
          <Route path="/editarsaida" element={<EditOutputPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}