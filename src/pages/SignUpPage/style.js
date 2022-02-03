import styled from "styled-components";

const ScreenSignUp = styled.div`
  width: 375px;
  height: 100vh;

  background-color:#905DBE;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    width: 325px;

    display: flex;
    flex-direction: column;  
    gap: 13px;

    margin: 24px 0px 36px 0px;

    input{
      width: 325px;
      height: 58px;

      border: 0px solid #FFFFFF;
      border-radius: 5px;

      padding: 15px;

      color: #000000;
      font-weight: 400;
      font-size: 20px;
    }
    input::placeholder{
      color: #000000;
      font-weight: 400;
      font-size: 20px;
    }
    input:focus{
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    button{
      width: 325px;
      height: 46px;

      background-color: #A328D6;

      border: 0px solid #FFFFFF;
      border-radius: 5px;

      color: #FFFFFF;
      font-weight: 700;
      font-size: 20px;
      &:hover{
        cursor:pointer;
      }
    }
   
  }
  
`;
const LinkStyled = styled.div`
  color: #FFFFFF;
  font-weight: 700;
  font-size: 15px;
  &:hover{
    cursor:pointer;
  }
`;

export {ScreenSignUp, LinkStyled };