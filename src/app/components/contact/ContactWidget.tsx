import React from "react";
import { Box, Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";

const ContactWidget = ({
  icon,
  value,
  width = "100%",
  color,
}: {
  icon: React.JSX.Element;
  color?: string;
  value: string | undefined;
  width?: string | number;
}) => {
  const responsive = useBreakpointValue({ base: "mobile", md: "web" });
  return (
    <Link
      width={width}
      href={`mailto:${value}`}
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        bgColor={"white"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"10px"}
        borderWidth={"1px"}
        boxShadow={"0px 0px 8px rgba(0, 0, 0, 0.1)"}
        borderColor={"lightgray.500"}
        width={width}
        borderRadius={"12px"}
        gap={"10px"}
      >
        {responsive === "web" ? (
          <>
            <Flex alignItems={"center"} gap={"10px"}>
              <Flex
                bgColor={color}
                width={"45px"}
                height={"45px"}
                ml={"10px"}
                borderRadius={"12px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {icon}
              </Flex>
              <Text fontSize="14px" fontWeight="extralight">
                {value}
              </Text>
            </Flex>
          </>
        ) : (
          <>
            <Flex alignItems={"center"} gap={"20px"}>
              <Flex
                bgColor={color}
                width={"45px"}
                height={"45px"}
                ml={"10px"}
                borderRadius={"12px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {icon}
              </Flex>
              <Text fontSize="14px" fontWeight="extralight">
                {value}
              </Text>
            </Flex>
          </>
        )}
      </Flex>
    </Link>
  );
};

export default ContactWidget;
