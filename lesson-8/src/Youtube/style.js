import styled from "styled-components";
import { ReactComponent as burger } from "../asstes/icons/burger.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  background: rgba(33, 33, 33, 0.99);
  color: #fff;
  height: 100vh;
  padding: ${({ flex }) => !flex && "0 30px"};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div``;

Icons.burger = styled(burger)`
  width: 24px;
  height: 24px;
`;
Icons.Logo = styled.img`
  width: 107px;
  height: 24px;
`;

export const Input = styled.input`
  height: 40px;
  background-color: #000000;
  width: 100%;
  max-width: 500px;
  border: 1.18px solid #424242;
  border-radius: 2px 0px 0px 2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
  padding: 6px 10px;
  :focus {
    outline: none;
  }
`;
