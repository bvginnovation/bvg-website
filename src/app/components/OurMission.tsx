import { Box } from "@chakra-ui/react";
import React from "react";
import { Content } from "./Content";

export const OurMission = () => {
  return (
    <Box mt={50}>
      <Content
        content={
          "Chez BVG, notre mission est de transformer vos idées en solutions numériques innovantes et efficaces. Nous nous engageons à offrir des services informatiques de hautes qualités qui répondent aux besoins spécifiques de chaque client. En alliant expertise technique et créativité, nous développons des solutions sur mesure qui non seulement résolvent des problèmes complexes, mais aussi anticipent les défis de demain. Notre objectif est de devenir votre partenaire de confiance dans la réussite de vos projets, en vous accompagnant à chaque étape, de la conception à la mise en œuvre et au-delà."
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
