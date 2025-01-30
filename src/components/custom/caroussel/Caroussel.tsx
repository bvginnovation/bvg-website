import { Center } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

export const Caroussel = ({ items }: any) => {
  return (
    <Center padding={10} width="full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {items.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              width={600}
              height={400}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Center>
  );
};
