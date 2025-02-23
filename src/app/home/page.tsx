"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Hero,
  WhyBVG,
  HowItWorks,
  OurServices,
  Teams,
  Blog,
  AboutUs,
  OurMission,
  OurValues,
  ContactUs,
  Footer,
} from "_app/components";
import { useColorMode } from "_components/ui/color-mode";

const HomePage = () => {
  const colorMode = useColorMode();
  return (
    <Box bgColor={colorMode.colorMode === "light" ? "white" : "black"}>
      <Hero />
      <WhyBVG />
      <HowItWorks />
      <OurServices />
      <Teams />
      <AboutUs />
      <OurMission />
      <OurValues />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default HomePage;
