import React from "react";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";
import {
  Box,
  Center,
  Grid,
  GridItem,
  VStack,
  Text,
  For,
} from "@chakra-ui/react";

export const AboutUs = () => {
  const stats = [
    { value: 20, label: "Clients Satisfaits", suffix: "H" },
    { value: 24, label: "équipe Experte", suffix: "K+" },
    { value: 8, label: "Demandes par jour", suffix: "+" },
  ];

  return (
    <Box mt={50}>
      <ImageBackgroundComponent
        imgSrc={"/assets/images/our-service.png"}
        height={{ base: "200px", md: "465px" }}
        isCenter
        color={"overlay"}
        opacity={0.8}
      >
        A propos de Nous
      </ImageBackgroundComponent>
      <Box
        p="30px"
        width="100%"
        marginTop={{ base: "50px", md: "150px" }}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <Center
          alignItems="center"
          justifyContent="center"
          bgColor={"gray.100"}
          borderRadius="12px"
          p="20px"
        >
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap="20px"
          >
            <For each={stats}>
              {(stat, index) => (
                <GridItem
                  key={index}
                  borderRadius="15px"
                  p="20px"
                  textAlign="center"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <VStack gap={3}>
                    <Text fontSize={"32px"} fontWeight="bold">
                      {stat?.value}
                      <span
                        style={{
                          fontSize: "34px",
                          marginLeft: "5px",
                          color: "#1A3C8A",
                        }}
                      >
                        {stat?.suffix}
                      </span>
                    </Text>
                    <Text
                      color={"lightGray.600"}
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      {stat?.label}
                    </Text>
                  </VStack>
                </GridItem>
              )}
            </For>
          </Grid>
        </Center>
      </Box>
    </Box>
  );
};
