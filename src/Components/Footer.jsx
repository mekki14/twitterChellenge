import React from 'react'
import styled from 'styled-components'
import FooterBg from '../assets/FooterBg.png'
import logo from '../assets/logo.svg'
import enterAuthLogo from '../assets/gea.svg'
const Footer =()=>{
    const Container = styled.div`
    position: relative; /* Required to position the pseudo-element */
    background-color: ${props=>props.theme.colors.bgColorSecondary}; /* Set the desired background color and opacity here */
    background-image: url(${FooterBg});
    background-blend-mode: multiply;
    background-position: center;
    background-attachment: scroll;
    margin: 0px;
    padding: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    height:304px;

  `;
    const Logo= styled.img`
    width:137px
    `
    const Divider= styled.div`
    background-color:white;
    width:1px;
    height:170px;`
    const EnterAuth= styled.img``
    return (<Container>
        <Logo src={logo}/>
        <Divider/>
        <EnterAuth src={enterAuthLogo}/>
    </Container>)
}
export default Footer