import { Box, Heading, Center, Text, List, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

type ContentPros = {
  title: string;
  description: string;
  advantages: string[];
  imageSrc: string;
  isReversed?: boolean;
}

export const Content = ({
  title,
  description,
  advantages,
  imageSrc,
  isReversed = false,
}: ContentPros) => {
  return (
    <Box as="section">
        <Center
          p={{ base: 5, md: 10 }}
          flexDir={{ base: "column", md: isReversed ? "row-reverse" : "row" }}
          alignItems={"flex-start"}
          justifyContent={"center"}
          w={"full"}
          gap={"20px"}
        >
          <Box width={"full"}>
          <Heading
          size={{ base: "xl", md: "lg" }}
          textAlign={{ base: "flex-start" }}
          color="orange.400"
        >
          {title}
        </Heading>
            <Text
              fontSize={{ base: "medium", md: "sm" }}
              textAlign={{ base: "center", md: "justify" }}
              lineHeight={2}
              fontWeight={"lighter"}
              mb={6}
            >
              {description}
            </Text>

            <Box mb={6}>
              <Heading
                as="h4"
                size={{ base: "md", md: "lg" }}
                color="blue.700"
                mb={2}
              >
                Avantages
              </Heading>
              <List.Root gap={3}>
                {advantages.map((advantage, index) => (
                  <List.Item
                    key={index}
                    display="flex"
                    alignItems="center"
                    fontSize={{ base: "sm", md: "sm" }}
                    gap='5px'
                  >
                    <Flex color={"green.500"}>
                       <FaCheckCircle />
                    </Flex>
                    {advantage}
                  </List.Item>
                ))}
              </List.Root>
            </Box>
          </Box>

          <Image
            src={imageSrc}
            alt="showcase-image"
            width={676}
            height={486}
            priority
          />
        </Center>
      </Box>
  );
};

export default Content;