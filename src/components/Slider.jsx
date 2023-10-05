import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

import "swiper/css/navigation";

import pic from "../resources/map.png";
import {AiFillStar} from 'react-icons/ai'; 
const slides = [
  { id: 1, name: "Abdullahi Ismail"},
  { id: 2, name: "Shuaib Lawal" },
  { id: 3, name: "John Doe" },
  { id: 4, name: "Jane Diggle" }
];

const Slider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="card">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum atque expedita cumque vitae sapiente, doloribus repellat quasi! Quas, quis.</p>
            <img className="swiperCard" src={pic} alt="" />
            <h3>{slide.name}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
