import styled from "styled-components";     // 1- aqui estou importante meus componentes do CSS
import background from '../../Assets/background1.svg'   
import { Link } from "react-router-dom";  

export const Container = styled.div `  
  background: url('${background}');
  background-size: cover;                   // é para a imagem cobrir toda a area, e não ficar repetindo
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;
export const Imagem = styled.img `  
  margin-top: 30px;
  width: 50vh;
`;

export const ContainerItens = styled.div `  
  background: linear-gradient(
  157.44deg,
  rgba(255, 255, 255, 0.6) 0.84%, 
  rgba(255, 255, 255, 0.6) 0.85%,
  rgba(255, 255, 255, 0.15) 100%);
  border-radius: 61px 61px 0px 0px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vh;
`;

export const H1 = styled.h1 `
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 47px;
  text-align: center;
  color: #FFFFFF;
  margin-bottom: 40px;
`
export const InputLabel = styled.p `  
  letter-spacing: -0.408px;
  color: #EEEEEE;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 50px;
  width: 100%;
`;

export const Input = styled.input `  
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 50px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #FFFFFF;
  margin-bottom: 15px;
  width: 100%;
`;

export const Button = styled(Link) `  
  width: 342px;
  height: 50px;
  margin-top: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.5;
  }
`



