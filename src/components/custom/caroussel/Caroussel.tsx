<<<<<<< HEAD
import { Center } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { EffectCoverflow } from "swiper/modules";
=======
import { Box, Center, List, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay, EffectCoverflow } from "swiper/modules";
>>>>>>> a559b77 (feat: 🎸 [home] integrate home feature)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

<<<<<<< HEAD
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
=======
interface TeamMember {
  img: string;
  name: string;
  roles: string[];
}

export const Caroussel = ({
  items,
  isMobile,
}: {
  items: TeamMember[];
  isMobile: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Center padding={10} width="full">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={isMobile ? 20 : 0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Mise à jour dynamique
        className="mySwiper"
      >
        {items?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={item?.img}
              alt={`Slide ${index + 1}`}
              width={200}
              height={200}
>>>>>>> a559b77 (feat: 🎸 [home] integrate home feature)
              priority
            />
          </SwiperSlide>
        ))}
<<<<<<< HEAD
=======
        <Center gap={{ base: 0, md: 4 }} flexDir="column" width="full" mt={10}>
          <Text
            alignItems={"flex-start"}
            fontSize={{ base: "medium", md: "25px" }}
            fontWeight="bold"
          >
            {items[activeIndex]?.name}
          </Text>
          <List.Root
            fontWeight="semibold"
            fontSize={{ base: "xs", md: "20px" }}
          >
            {items[activeIndex]?.roles.map((role, i) => (
              <List.Item
                key={i}
                _marker={{ color: i === 0 ? "primary.500" : "secondary.500" }}
              >
                {role}
              </List.Item>
            ))}
          </List.Root>
        </Center>
>>>>>>> a559b77 (feat: 🎸 [home] integrate home feature)
      </Swiper>
    </Center>
  );
};
