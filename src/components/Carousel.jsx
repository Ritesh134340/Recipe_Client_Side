import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components"

const Carousel = () => {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/a487476686464aaf8212ff0c6439a50d.jpg/v1/fill/w_470,h_308,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/a487476686464aaf8212ff0c6439a50d.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/fc1909a357c14537ab206230eaec855b.jpg/v1/fill/w_470,h_308,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/fc1909a357c14537ab206230eaec855b.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/daeb33d827a4610b13984b0934106c73.jpg/v1/fill/w_414,h_272,fp_0.50_0.50,lg_1,q_80,enc_auto/daeb33d827a4610b13984b0934106c73.jpg",
    },
    {
      image:
        "https://static.wixstatic.com/media/19b7cdcd2fb243728976335d99575469.jpeg/v1/fill/w_470,h_308,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/19b7cdcd2fb243728976335d99575469.jpeg",
    },

    {
      image:
        "https://static.wixstatic.com/media/4f2cd1de7f844d5985460325e7a9075b.jpg/v1/fill/w_470,h_308,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/4f2cd1de7f844d5985460325e7a9075b.jpg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
            <div className="abs-text-div">
              <h1>Hello world</h1>
            </div>
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
    position:relative;
    border:3px solid red;
  }
  .abs-text-div{

   border:2px solid yellow;
   position:absolute;
   top:30px;
   color:white;
 

   &:before{
    content:"";
    position:absolute;
    top:0;
    left:0;
    z-index:99999999;
    width:100%;
    height:100%;
    opacity:0.5;
    background-color:black;
   }
  }
  
  .carousel-image{
    height:230px;
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

    @media all and (max-width:1024px) and (min-width:769px){
    .carousel-image{
    height:150px;
    width:93%;
    border-radius:10px;
    }
}


@media all and (max-width:768px) and (min-width:481px){
  .carousel-image{
    height:150px;
    width:93%;
    border-radius:10px;
    }
}

@media all and (max-width:480px) and (min-width:279px){
  .carousel-image{
    height:190px;
    width:95%;
    border-radius:8px;
    }
}
`


