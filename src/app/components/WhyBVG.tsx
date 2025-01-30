"use client";

import { Center, Text, For, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Content } from "./Content";

export const WhyBVG = () => {
  const [isPaused, setIsPaused] = useState(false);
  const value = [
    {
      value: "Expertise multidisciplinaire",
    },
    { value: "Engagement envers nos clients" },
    { value: "Services adaptés aux petites et grandes entreprises" },
    { value: "Accompagnement de A à Z" },
    { value: "Innovation au cœur de notre travail" },
    { value: "Expérience et fiabilité" },
  ];
  return (
    <>
      <Content
        content={
          "    Chez BVG-INNOVATION, nous ne nous contentons pas de répondre à vosbesoins, nous transformons vos idées en solutions innovantes quipropulsent votre entreprise vers le succès. Nous créons dessolutions sur mesure, mêlant créativité, expertise et technologie depointe, pour faire de vos ambitions une réalité."
        }
        title={"  Pourquoi choisir BVG-INNOVATION ?"}
        imageSrc={"/assets/images/bvg-cart.png"}
      />
      <Center
        bgColor={"#F5F5F5"}
        mt={{ base: "30px", md: "50px" }}
        p={{ base: "5", md: "20" }}
        overflow="hidden"
        width="100%"
      >
        <Flex
          whiteSpace="nowrap"
          alignItems={"center"}
          justifyContent={"center"}
          animation={`slidesHorizontaleScale`}
          animationPlayState={isPaused ? "paused" : "running"}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          gap={20}
        >
          <For each={value}>
            {(item, index) => (
              <Text
                key={index}
                color={"primary.500"}
                fontWeight={"semibold"}
                textAlign={"center"}
                fontSize={{ base: "meduim", md: "2xl" }}
              >
                {item.value}
              </Text>
            )}
          </For>
        </Flex>
      </Center>
    </>
  );
};
