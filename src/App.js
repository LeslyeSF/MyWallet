import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import GlobalStyle from "./styles";

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}