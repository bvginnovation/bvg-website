import { Box } from "@chakra-ui/react";
import React from "react";
import { Content } from "./Content";

export const OurMission = () => {
  return (
    <Box mt={50}>
      <Content
        content={
          "BVG transforme vos idées en solutions numériques innovantes. Nous offrons des services IT sur mesure, alliant expertise et créativité pour résoudre vos défis et anticiper l'avenir. Votre partenaire de confiance, de la conception à la réalisation"
        }
        title={"Notre Mission"}
        imageSrc={"/assets/images/our-mission.png"}
        showButton
        bgColor={"white"}
        buttonTitle={"En savoir plus"}
      />
    </Box>
  );
};
