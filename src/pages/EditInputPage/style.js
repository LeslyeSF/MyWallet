import styled from "styled-components";
const ScreenOutput = styled.div`
  width: 375px;
  height: 100vh;

  background-color:#905DBE;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;

  padding: 25px;

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

const Title = styled.div`
  width: 100%;
  height: 31px; 

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #FFFFFF;
  font-weight: 700;
  font-size: 26px;
`;

export {ScreenOutput, Title};