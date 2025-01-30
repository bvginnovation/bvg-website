import {
  Box,
  Flex,
  Text,
  Center,
  useBreakpointValue,
  Separator,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const responsiveMode = useBreakpointValue({
    md: "web",
    base: "mobile",
  });
  return (
    <Box w={"full"} mt={50}>
      <Flex bgColor={"primary.500"} width={"full"}>
        <Box pos={"relative"} width={"25%"}>
          <Image
            src={"/assets/images/forme.png"}
            alt="forme"
            width={250}
            height={100}
          />
          <Center pos="absolute" inset={0} zIndex={1000} width={"full"}>
            <Image
              src={"/assets/images/bvg-icon.png"}
              alt={"bvg-icon"}
              width={responsiveMode === "web" ? 100 : 20}
              height={responsiveMode === "web" ? 100 : 80}
            />
          </Center>
        </Box>
        <Box position={"relative"} width={"full"}>
          <Center minH={"50vh"}>
            <Flex gap={50}>
              <Box>
                <Text>Contact</Text>
                <VStack mt={8}>
                  <Flex gap={4}>
                    <Text>icon</Text>
                    <Text>value</Text>
                  </Flex>
                </VStack>
              </Box>
              <Box>
                <Text>Liens</Text>
                <VStack mt={8}>
                  <Flex gap={4}>
                    <Text>icon</Text>
                    <Text>value</Text>
                  </Flex>
                </VStack>
              </Box>
            </Flex>
          </Center>
          <Box width={"full"}>
            <Flex alignItems={"flex-end"} justifyContent={"flex-start"} gap={4}>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
              <Text>Hello</Text>
            </Flex>
            <Separator size="lg" mt={3} />
            <Center mt={10}>
              <Text>Copyrights</Text>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
