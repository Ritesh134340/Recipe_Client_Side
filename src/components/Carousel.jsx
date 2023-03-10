import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components"

const Carousel = ({infinite,arrows,data}) => {

  const dataArray =data ? data : [
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
  const arrowValue=arrows==="true"? true : false
  const infiniteValue=infinite==="false" ?false :true

 

  const settings = {
    dots: true,
    infinite:infiniteValue,
    speed: 500,
    arrows:arrowValue,
    slidesToShow: 4,
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
      
      {dataArray &&
        dataArray.map((ele, index) => (

          <div key={index} className='carousel-image-wrapper' >

            <img className='carousel-image'
              src={ele.image}
            ></img>
            <div className="abs-text-div">
              <p className="image-text">Text here</p>
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
    position:relative;
  }

  .image-text{
    margin-top:10px;
    margin-bottom:10px;
    color:white;
  }

  .abs-text-div{
    position: absolute;
    top:4%;
    margin-left:2%;
    width:130px;
    background-color:rgba(0,0,0,0.6);
 
  }
  
  .carousel-image{
    height:200px;
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
    width:96%;
    border-radius:10px;
    }
   
}


@media all and (max-width:768px) and (min-width:481px){
  .carousel-image{
    width:93%;
    border-radius:10px;
    }

}

@media all and (max-width:480px) and (min-width:279px){
  .carousel-image{
    width:95%;
    border-radius:8px;
    }

   
}
`


