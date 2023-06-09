import styled from "styled-components";     // 1- aqui estou importante meus componentes do CSS
import background from '../../Assets/background.svg' 
import { Link } from "react-router-dom";     

export const Container = styled.div `  
  background: url('${background}');
  background-size: cover;                   // é para a imagem cobrir toda a area, e não ficar repetindo
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
  min-height: 100vh;
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
  padding: 10px 36px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 72vh;
  width: 50vh;
  backdrop-filter: blur(22.5px)
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

export const Button = styled(Link) `  
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;
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
  &:hover{
    opacity: 0.8;
  }
  &:active{
    opacity: 0.5;
  }
  img{
    transform: rotateY(180deg);    // rotacionar a imagem (girar)
  }
`;


export const User = styled.li `
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 100%;
  height: 58px;
  border: none;
  outline: none;
  margin-top: 10px;
  p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }
  button{
    background: none;
    border: none;
    cursor: pointer;
  }
`