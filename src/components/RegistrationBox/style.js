import styled from "styled-components";
const Registrationbox = styled.div`
  width: 325px;
  height: 446px;

  background-color: #FFFFFF;

  margin: 22px 0px 13px 0px;
  padding:23px 12px 12px 12px;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.records) ? "space-between" : "center"};
  align-items: center;

  span{
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #868686;
  }
`;
const List = styled.div`
  width: 100%;
  max-height:330px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;


const Value = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => (props.status === "input") ? "#03AC00" : "#C70000"};
  span{
    margin-left: 10px;
    color: #C6C6C6;
  }
  span:hover{
    cursor:pointer;
  }
`;
const Info = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    span{
      margin-right: 5px;
      color: #C6C6C6;
    }
    &:hover{
      cursor:pointer;
    }
`;

const Balance = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  p{
    font-weight: 700;
    font-size: 17px;
    color: #000000;
  }
`;
const Total = styled.div`
    color: ${props => (props.total > 0) ? "#03AC00" : "#C70000"};
    font-weight: 400;
    font-size: 17px;
`;
export {Registrationbox, List, Value, Info, Balance, Total};