import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";
import { BaseCard } from "_/components/custom/card";
import { LuDot } from "react-icons/lu";
import { DotIcon } from "../../../public/assets/svg";
import { Colors } from "_/theme/variables";

export const Blog = () => {
  const listItem = [
    {
      key: "Créativité Parfaite",
      content:
        "Nous croyons fermement que chaque idée a le potentiel de changer le monde. C'est pourquoi nous nous engageons à faire de vos idées une réalité. ",
      img: "/assets/images/perfect.png",
    },
    {
      key: "Dev-Votre Satisfaction est notre Priorité",
      content:
        "Notre engagement envers nos clients ne s'arrête pas à la livraison du produit. Nous croyons qu'un service exceptionnel se mesure par la qualité du suivi que nous offrons bien après que votre projet soit en ligne.",
      img: "/assets/images/priority.png",
    },
    {
      key: "Planning et stratégie",
      content:
        "La stratégie et le planning sont au cœur de notre approche. Chaque projet commence par une analyse approfondie de vos besoins et de vos objectifs. ",
      img: "/assets/images/planning.png",
    },
  ];
  return (
    <Box mt={50}>
      <ImageBackgroundComponent
        imgSrc={"/assets/images/blog.png"}
        height={{ base: "200px", md: "465px" }}
        isCenter
        color={"primary"}
        opacity={0.8}
      >
        Blog
      </ImageBackgroundComponent>
      <Center mt={30} width={"full"}>
        <Box>
          <Flex mb={"20px"} alignItems={"flex-end"} justifyContent={"flex-end"}>
            <DotIcon fill={Colors.secondary} width={200} height={200} />
          </Flex>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap="40px">
            {listItem.map((item, index) => (
              <BaseCard
                shadow={"sm"}
                key={index}
                title={item.key}
                content={item.content}
                showButton
                imgSrc={item.img}
              />
            ))}
          </SimpleGrid>
          <Flex
            mt={"20px"}
            width={"fit-content"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
          >
            <DotIcon fill={Colors.primary} width={200} height={200} />
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};
