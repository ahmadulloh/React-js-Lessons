import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const common = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;

export const Button = styled.div`
  ${common}
  font-size: 18px;
  color: #000;
  background-color: #fff;
  border: 2px solid #000;
`;
export const ActiveButton = styled.div`
  ${common}
  border: 2px solid #fff;

`;

export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  animation: ${rotate} 1s linear infinite;
`;
