import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props=>props.first?props.theme.colors.firstBtnColor:props.second?props.theme.colors.secondBtnColor:
    props.third?props.theme.colors.thirdBtnColor:props.fourth?props.theme.colors.fourthBtnColor:props.theme.colors.bgColorSecondary};
  border: none;
  color: white;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight:600;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.07);

  }

  &:active {
    transform: scale(0.98);
  }
`;