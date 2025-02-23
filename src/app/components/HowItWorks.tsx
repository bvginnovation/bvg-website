import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Content } from "./Content";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";

export const HowItWorks = () => {
  return (
    <Box mt={50}>
      <ImageBackgroundComponent
        imgSrc={"/assets/images/how-it-work-cart.png"}
        height={{ base: "200px", md: "465px" }}
        color={"primary"}
        isCenter
        opacity={0.8}
      >
        Comment ca marche ?
      </ImageBackgroundComponent>
      <Content
        content={
          "Chaque idée a du potentiel. Notre équipe d'experts en design, développement et conseil IT vous aide à transformer vos concepts en solutions performantes. À l'écoute de vos besoins, nous affinons vos idées pour créer des interfaces intuitives, des applications innovantes ou des stratégies IT adaptées. Nous rendons votre projet plus efficace et captivant."
        }
        title={
          "Travaillez plus intelligemment avec un accès facile à toutes vos données."
        }
        imageSrc={"/assets/images/how-it-work-illustration.png"}
        showButton
        buttonTitle={"Commencez"}
      />
    </Box>
  );
};
