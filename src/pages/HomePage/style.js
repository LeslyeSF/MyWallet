import styled from "styled-components";

const ScreenHome = styled.div`
  width: 375px;
  height: 100vh;

  background-color:#905DBE;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 25px;  
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

const Options = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  div{
    width: 155px;
    height: 114px;

    background-color: #A328D6;

    border-radius: 5px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    color: #FFFFFF;
    font-weight: 700;
    font-size: 17px;
    &:hover{
      cursor:pointer;
    }
  
  }
`;

export {ScreenHome, Title, Options};