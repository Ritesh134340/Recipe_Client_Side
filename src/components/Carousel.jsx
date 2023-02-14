import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components"

const Carousel = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://media.istockphoto.com/id/1145763261/photo/image-of-romantic-indian-breakfast-of-fried-love-heart-shaped-uttapams-savoury-pancakes.jpg?b=1&s=170667a&w=0&k=20&c=UBR5A1XkJ3NbUJlIZRWTBCeyCuLb4U17BmO7n8B24vc=",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    pauseOnHover: false,
  };
  return (
     <CarouselWrapper>
    <Slider {...settings} style={{boxSizing:"border-box",width:"100%",margin:"auto",textAlign:"center"}}>
      
      {data &&
        data.map((ele, index) => (
          <div key={index} className='carousel-image-wrapper' >
            <img className='carousel-image'
              src={ele.image}
             
            ></img>
          </div>
        ))}
    </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;


export const CarouselWrapper=styled.div`
  box-sizing:border-box;
  .carousel-image-wrapper{
    width:100%
  }
  .carousel-image{
    height:350px;
    display:block;
    margin:auto;
    box-sizing:border-box;
    width:96%;
    border-radius:13px;
    }
    .slick-prev:before,
      .slick-next:before {
        color: red;
      }
      .slick-dots li button:before
    {
        font-size: 10px;
        padding-top:15px;

    
 
    }
`


