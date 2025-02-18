import { Box, Heading, Center, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { BaseButton } from "_components/custom/button";

export const Content = ({
  content,
  title,
  imageSrc,
  buttonTitle,
  showButton = false,
  bgColor = "primary.500",
}: {
  content: string;
  title: string;
  imageSrc: string;
  buttonTitle?: string;
  showButton?: boolean;
  bgColor?: string;
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      mt={{ base: 10, md: 100 }}
      gap={30}
    >
      <Heading size={{ base: "xl", md: "3xl" }} textAlign={{ base: "center" }}>
        {title}
      </Heading>
      <Center
        p={{ base: 5, md: 20 }}
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        w={"full"}
        gap={"20px"}
      >
        <Box width={"full"}>
          <Text
            fontSize={{ base: "medium", md: "2xl" }}
            textAlign={{ base: "center", md: "left" }}
            lineHeight={2}
            fontWeight={"lighter"}
          >
            {content}
          </Text>
          {showButton && (
            <BaseButton
              bgColor={bgColor}
              color={bgColor === "white" ? "primary.500" : "white"}
              shadow={"lg"}
              mt={"20px"}
              mb={"20px"}
              p={{ base: "25px", md: "30px" }}
            >
              {buttonTitle}
            </BaseButton>
          )}
        </Box>
        <Image
          src={imageSrc}
          alt="bvg-images"
          width={500}
          height={500}
          priority
        />
      </Center>
    </Box>
  );
};
