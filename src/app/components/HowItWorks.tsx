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
          "Nous croyons que chaque idée mérite d'être développée à son plein potentiel. Notre équipe d'experts en design, développement et consulting IT travaille en étroite collaboration avec vous pour transformer vos concepts en solutions remarquables. Nous écoutons attentivement vos besoins, analysons vos objectifs et utilisons notre expertise pour affiner et enrichir vos idées. Que ce soit pour créer une interface utilisateur intuitive, développer une application mobile innovante, ou offrir des conseils stratégiques en IT, notre mission est de rendre chaque aspect de votre projet meilleur, plus performant et visuellement captivant."
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
