import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    word-wrap: break-word;
  }
  .root{
    background-color: black;
    width: 100%;
    height: 100px;
    
  }
  h1{
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
    font-size: 100px;
  }
`;