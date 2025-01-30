import { Box, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";
import { Caroussel } from "_/components/custom/caroussel/Caroussel";

export const Teams = () => {
  const responsiveMode = useBreakpointValue({ base: "mobile", md: "web" });
  const teamMembers = [
    {
      img: "/assets/images/victory.png",
      name: "Victory MBENZE",
      roles: ["Full-stack Developer", "Co-fondateur"],
    },
    {
      img: "/assets/images/berthonge.png",
      name: "Berthonge MIBAMBOU",
      roles: ["SRE-Engineer", "Co-fondateur"],
    },
    {
      img: "/assets/images/glad.png",
      name: "Glad NZAOU",
      roles: ["Project Manager", "Co-fondateur"],
    },
    {
      img: "/assets/images/sibelle.png",
      name: "Sibelle KASONGO",
      roles: ["Customer Relationship Managert", "Community Manager"],
    },
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
        Notre Equipe
      </ImageBackgroundComponent>
      <Caroussel items={teamMembers} isMobile={responsiveMode === "mobile"} />
    </Box>
  );
};
