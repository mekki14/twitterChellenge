import React from 'react'
import styled from 'styled-components'
import {Button} from './sharedComponents'
import cardImg1 from '../assets/Cards/Eid-identity.png'
import cardImg2 from '../assets/Cards/Design-templates.png'
import cardImg3 from '../assets/Cards/Eid-book.png'
import cardImg4 from '../assets/Cards/CompaniesKit.png'
import cardImg5 from '../assets/Cards/HomeKit.png'
import EidIdentityBG from '../assets/EidIdentityBG.png'
import dec1 from '../assets/file-docer-1.png'
import dec2 from '../assets/file-docer-4.png'
import dec3 from '../assets/file-docer-3.png'
const CardSection = () => {
    const CardContainer =styled.div`
    position: relative; /* Required to position the pseudo-element */
    min-height:100vh;
    padding:80px 15px;
    width:calc(100vw-30px);
    display:flex;
    justify-content:center;
    align-items:center;
    background-image: url(${EidIdentityBG});
    background-blend-mode: multiply;
    background-position: bottom;
    background-repeat: no-repeat;
    background-attachment: scroll;
    

    `
    const Decor1 = styled.img`
    position:absolute;
    top:120px;
    right:15%;
    z-index:-1;
    width:110px;
    `
    const Decor2 = styled.img`
    position:absolute;
    bottom:230px;
    right:5%;
    width:90px;

    `
    const Decor3 = styled.img`
    position:absolute;
    bottom:210px;
    left:5%;
    width:90px;

    `
    const CardWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    flex-direction:row-reverse;
    column-gap:25px;
    row-gap:40px;
    `
    const CardContent =  styled.div`
    width:210px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    
    `
    const Card =  styled.div`
    background-color:${props=>props.theme.colors.cardColor};
    height:220px;
    border-radius:10px;
    margin-bottom:20px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    `
    const Img = styled.img`
    width:130px;
    `
    const CBtn= styled(Button)`
        width:100%
    `
    
    return (<CardContainer>

<Decor1 src={dec1}/>
<Decor2 src={dec2}/>
<Decor3 src={dec3}/>

        
    <CardWrapper>
        <CardContent>
            <Card> <Img src={cardImg1}/></Card>
            <CBtn first>هوية العيد</CBtn>
        </CardContent>
        <CardContent>
            <Card><img src={cardImg2} style={{width:"100px"}}/></Card>
            <CBtn >قوالب التصميم</CBtn>
        </CardContent>
        <CardContent>
            <Card> <Img src={cardImg3}/></Card>
            <CBtn third>كتيب العيد</CBtn>
        </CardContent>
        <CardContent>
            <Card><Img src={cardImg4}/></Card>
            <CBtn second>مطبوعات الشركات</CBtn>
        </CardContent>
        <CardContent>
            <Card><Img src={cardImg5}/></Card>
            <CBtn fourth>مطبوعات المنازل</CBtn>
        </CardContent>
    </CardWrapper>
    </CardContainer>)
}
export default CardSection