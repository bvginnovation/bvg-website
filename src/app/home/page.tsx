"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Hero, WhyBVG, HowItWorks, OurServices } from "_app/components";
import { useColorMode } from "_components/ui/color-mode";

const HomePage = () => {
  const colorMode = useColorMode();
  return (
    <Box bgColor={colorMode.colorMode === "light" ? "white" : "black"}>
      <Hero />
      <WhyBVG />
      <HowItWorks />
      <OurServices />
      <Box mb={600} />
    </Box>
  );
};

export default HomePage;
