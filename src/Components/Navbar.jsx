import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import styled from 'styled-components'
import { Button } from './sharedComponents'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const NavContainer= styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding:5px 15px;
  position:fixed;
  top: 0;
  left: 0;
  right:0;
  z-index: 999;
  width:calc(100vw-30px);
  @media screen and (max-width:768px) {
    justify-content: space-between;
    align-items: center;
    padding:5px 35px;


    }
  `
 const NavLogo = styled.img`
 width: 120px;
`;
const NavList = styled.ul`
text-decoration: none;
list-style: none;
display: flex;
flex-direction: row-reverse;
column-gap: 25px;
justify-content:center;
align-items: center;
@media screen and (max-width:768px) {
  position:absolute;
  flex-direction: column;
  align-items: end;
  padding:10px;
  background-color: rgba(244, 136, 30,0.9);
  row-gap: 20px;
  width:300px;
  top:70px;
  left:5%;
  transform: translateX(0%);
  border-radius: 10px;
  transition: 1s ease-out; /* Add the transition property here */
  &.open {
    transform: translateX(-120%)
  }
}
`;
  const NavItem = styled.li`
display:flex;
justify-content: center;
align-items: center;
transition: all 0.25s ease-out;
  &:hover {
      transform: scale(1.1);
    }
    @media screen and (max-width:768px) {
   padding-bottom:20px ;
  }
  `
  const Alist = styled.a`   
    color: ${props => props.theme.colors.whiteColor};
    text-decoration: none;
    cursor: pointer;
    &:hover {
    transform: scale(1.1);
    }
  `
  const Burger = styled.div`
    display:none;
    flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
    @media screen and (max-width:768px) {
      display:flex;
    }
  `

  return (
    <NavContainer>
      <NavLogo src={logo} alt="logo"/>
      <NavList className={open?"open":""}>
        <NavItem><Alist href="">هوية العيد</Alist></NavItem>
        <NavItem><Alist href="">ملفات الهوية</Alist></NavItem>
        <NavItem><Alist href="">تهنئة العيد</Alist></NavItem>
        <NavItem><Button first href="">اكتشف فعاليات العيد</Button></NavItem>
        <NavItem>ُ<Alist href="">English</Alist></NavItem>
      </NavList>
      <Burger onClick={()=>setOpen(!open)}>
        <span/>
        <span/>
        <span/>
      </Burger>
    </NavContainer>
  )
}

export default Navbar