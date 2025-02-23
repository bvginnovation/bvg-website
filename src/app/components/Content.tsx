import { Box, Heading, Center, Text, Flex } from "@chakra-ui/react";
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
      width={"full"}
      gap={30}
    >
      <Heading size={{ base: "xl", md: "3xl" }} textAlign={{ base: "center" }}>
        {title}
      </Heading>
      <Flex
        pr={10}
        pl={10}
        mt={10}
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        width={"full"}
      >
        <Box width={"full"}>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            textAlign={{ base: "center", md: "justify" }}
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
        <Flex
          width={{ base: "100%", md: "1/2" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            src={imageSrc}
            alt="bvg-images"
            width={500}
            height={500}
            priority
          />
        </Flex>
      </Flex>
    </Box>
  );
};
