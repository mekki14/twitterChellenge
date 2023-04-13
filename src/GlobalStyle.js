import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.bgColorPrimary};
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.whiteColor};
    margin:0px;
    padding:0px;
}
.swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 5px;
    opacity: 1;
  }

   .swiper-pagination-bullet-active {
    background-color: #fff;
    opacity: 1;

  }
`;