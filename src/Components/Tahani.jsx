import React from 'react'
import {Button} from './sharedComponents'
import styled from 'styled-components'
import steps from '../assets/steps-ar.png'
import eidCards from '../assets/Eid-cards.png'
import eid200 from '../assets/cardEid/Eid-card_xpxdnd_c_scale,w_200.png'
import eid473 from '../assets/cardEid/Eid-card_xpxdnd_c_scale,w_473.png'
import eid710 from '../assets/cardEid/Eid-card_xpxdnd_c_scale,w_710.png'
import eid845 from '../assets/cardEid/Eid-card_xpxdnd_c_scale,w_845.png'
import EidGreetingsBG from '../assets/EidGreetingsBG.png'
import doc4 from '../assets/docer-2.png'
const Tahani = () => {
    const  Container = styled.div`
     position: relative; /* Required to position the pseudo-element */
    background-color: ${props=>props.theme.colors.bgColorSecondary}; /* Set the desired background color and opacity here */
    background-image: url(${EidGreetingsBG});
    background-blend-mode: multiply;
    background-position: bottom;
    background-repeat: no-repeat;
    background-attachment: scroll;
    margin: 0px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    height:100vh;
    @media screen and (max-width:768px){
    flex-direction: column-reverse;
    row-gap: 20px;
        
    }

    `
    const TImg =styled.img`

    `
    const Decor4 = styled.img`
    position:absolute;
    top:70px;
    left:25%;
    z-index:0;
    width:110px;
    `
   
    const TContent= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:end;
    width:32vw;
    min-width:300px;
    h1 {
        padding:0px;
        margin:5px 0px;
        font-size:3rem;
    }
    h3 {
        margin:5px 0px;

    }

    @media screen and (max-width:768px){
        //align-items:center;

        
    }

    `
    const CImg = styled.img`
    width:20vw;
    min-width:120px;
    margin-bottom:10px;
    `
    return (<Container>
        <Decor4 src={doc4}/>
        <img 
  src={eid845}
  srcset={`
    ${eid200} 200w,
    ${eid473} 490w,
    ${eid710} 702w,
    ${eid845} 878w
  `}
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 27vw"
/>
        <TContent>
            <h1>تهنئة العيد</h1>
            <h3>هنئ احبابك ببطاقات العيد</h3>
            <CImg src={steps}
            
            />
            <Button style={{backgroundColor:`#FBB315`,color:`#7862AA`}}>اصنع بطاقتك</Button>
        </TContent>
    </Container>)
}
export default Tahani