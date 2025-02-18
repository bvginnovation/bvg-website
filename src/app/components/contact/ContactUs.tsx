import { Box, Center, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { ImageBackgroundComponent } from "../ImageBackgroundComponent";
import ContactForm from "./ContactForm";
import ContactWidget from "./ContactWidget";
import {
  DotIcon,
  MailIcon,
  PhoneRingsIcon,
} from "../../../../public/assets/svg";

export const ContactUs = () => {
  const responsive = useBreakpointValue({ base: "mobile", md: "web" });

  return (
    <Box mt={50}>
      <ImageBackgroundComponent
        imgSrc={"/assets/images/our-service.png"}
        height={{ base: "200px", md: "465px" }}
        isCenter
        color={"primary"}
        opacity={0.8}
      >
        Contactez-nous
      </ImageBackgroundComponent>
      <Box
        //ref={ref}
        width="100%"
        marginTop={{ base: "50px", md: "150px" }}
        // {...animationStyles}
      >
        {responsive === "web" ? (
          <Flex
            bgImage={"/assets/images/background.png"}
            align={"center"}
            justify={"center"}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            backgroundSize="contain"
            h="100%"
          >
            <Center width="100%">
              <Box>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  gap={{ base: "16px", md: "24px" }}
                  p={"30px"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <ContactWidget
                    icon={<MailIcon fill="white" />}
                    color="secondary.500"
                    value={process.env.NEXT_PUBLIC_GOOGLE_EMAIL}
                  />
                  <ContactWidget
                    icon={<PhoneRingsIcon fill="white" />}
                    color="primary.500"
                    value={process.env.NEXT_PUBLIC_BVG_PHONE_NUMBER}
                  />
                </Flex>
                <Box
                  mt={{ base: "16px", md: "24px" }}
                  p={{ base: 4, md: 8 }}
                  boxShadow="0px 0px 50px 0px rgba(110, 124, 124, 0.1)"
                  width={{ base: "100%", md: "80vw" }}
                  minH={{ base: "500px", md: "600px" }}
                  borderRadius="30px"
                  bgColor="white"
                >
                  <ContactForm />
                </Box>
              </Box>
            </Center>
          </Flex>
        ) : (
          <Box width="100%" bgColor="primary.500">
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: "16px", md: "24px" }}
              alignItems="center"
              p={"10px"}
              justifyContent="center"
            >
              <ContactWidget
                icon={<MailIcon fill="white" />}
                color="secondary.500"
                value={process.env.NEXT_PUBLIC_GOOGLE_EMAIL}
              />
              <ContactWidget
                icon={<PhoneRingsIcon fill="white" />}
                color="primary.500"
                value={process.env.NEXT_PUBLIC_BVG_PHONE_NUMBER}
              />
            </Flex>
            <Box
              mt={{ base: "16px", md: "24px" }}
              p={{ base: 4, md: 8 }}
              boxShadow="0px 0px 50px 0px rgba(110, 124, 124, 0.1)"
              width={{ base: "100%", md: "80vw" }}
              bgColor="white"
            >
              <ContactForm />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};
