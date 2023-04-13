import React from 'react'
import { Button } from './sharedComponents'
import styled from 'styled-components'
import heroGif1 from '../assets/heroSlides/slide-1-o.gif'
import heroGif2 from '../assets/heroSlides/slide-2-o.gif'
import heroGif3 from '../assets/heroSlides/slide-3-o.gif'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from "swiper";

const Hero = () => {
    const HeroContainer = styled.div`
        color:white;
        display: flex;
        flex-direction:column ;
        text-align: right;
        position:relative;
        margin:0px;
        background-image: url(${props=>props.backgroundImage});
        height:100vh;
        background-position:53%;
    `
    const HeroContent = styled.div`
        position: absolute;
        left: 30%;
        top:50%;
        transform:translate(-50%,-50%);
        width:320px;
        & h1 {
            font-size: 3.2rem;
            padding:3px 0px;
            margin:5px 0px
        }
        & h3 {
            font-size: 1.8rem;
            padding:3px 0px;
            margin:2px 0px;
            margin-bottom:15px
        }
    `
    
    
  return (<> <Swiper
    spaceBetween={0}
    slidesPerView={1}
    pagination={{  clickable: true }}
 modules={[Pagination]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
        <HeroContainer backgroundImage={heroGif1}>
        <HeroContent>
            <h1>فرحة العيد</h1>
            <h3>تتخبى في تفاصيله الصغيرة الي كل سنة ننتظرها</h3>
            <Button >حمل هوية عيد الفطر 2023</Button>
        </HeroContent>
    </HeroContainer>
        </SwiperSlide>
    <SwiperSlide>
    <HeroContainer backgroundImage={heroGif2}>
    <HeroContent>
            <h1>حماس العيد</h1>
            <h3>يكتمل بفعاليات و تجارب ترافقها البهجة والذكريات السعيدة</h3>
            <Button first>استعراض كتيب الفعاليات</Button>
        </HeroContent>
    </HeroContainer>
    </SwiperSlide>
    <SwiperSlide> 
    <HeroContainer backgroundImage={heroGif3}>
    <HeroContent>
            <h1>كرم استقبال العيد</h1>
            <h3>يتضاعف بالعيدية الابتسامة و الكلمة الحلوة</h3>
            <Button fourth>شارك تهنئة خاصة</Button>
        </HeroContent>
    </HeroContainer>
    </SwiperSlide>
    <SwiperSlide> 
    <HeroContainer backgroundImage={heroGif1}>
    <HeroContent>
            <h1>تفاصيل العيد</h1>
            <h3>تزين جمعتنا بين الاهل و الصحاب وفي بيئة العمل بين مكاتبنا</h3>
            <Button fourth>حمل حقيبة المطبوعات</Button>
        </HeroContent>
    </HeroContainer>
    </SwiperSlide>

  </Swiper>

  </>
  )
}

export default Hero