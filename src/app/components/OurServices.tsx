import { Box, SimpleGrid, Center, Heading, For } from "@chakra-ui/react";
import React from "react";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";
import { BaseCard } from "_components/custom/card";

export const OurServices = () => {
  const listItem = [
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/dev-web.png",
    },
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/dev-mob.png",
    },
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/ui-ux.png",
    },
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/graphic.png",
    },
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/refonte.png",
    },
    {
      key: "Dev-web",
      value: [
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
        "Transport",
        "Réservation",
        "Fitness",
      ],
      img: "/assets/images/consulting.png",
    },
  ];

  return (
    <Box mt={50}>
      <ImageBackgroundComponent
        imgSrc={"/assets/images/our-service.png"}
        height={{ base: "200px", md: "465px" }}
        isCenter
        color={"secondary"}
        opacity={0.8}
      >
        Nos Services
      </ImageBackgroundComponent>
      <Center>
        <Heading
          maxW={{ base: "100%", md: "900px" }}
          mt={20}
          size={{ base: "xl", md: "3xl" }}
          textAlign={"center"}
        >
          Découvrez notre gamme complète de solutions technologiques conçues
          pour propulser votre entreprise vers l'avenir
        </Heading>
      </Center>

      <Center p={8} mt={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap="40px">
          <For each={listItem}>
            {(item, index) => (
              <BaseCard
                shadow={"xs"}
                key={index}
                title={item.key}
                isList
                listItem={item?.value?.map((val) => ({ value: val }))}
                showButton={false}
                imgSrc={item.img}
              />
            )}
          </For>
        </SimpleGrid>
      </Center>
    </Box>
  );
};
