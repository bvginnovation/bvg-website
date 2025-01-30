import { Box } from "@chakra-ui/react";
import React from "react";
import { Content } from "./Content";

export const OurValues = () => {
  return (
    <Box mt={50}>
      <Content
        content={
          "Chaque projet que nous entreprenons est réalisé avec rigueur et attention aux détails. Nous nous engageons à fournir des résultats qui surpassent les attentes de nos clients, tout en respectant les délais et les exigences spécifiques."
        }
        title={"Nos Valeurs"}
        imageSrc={"/assets/images/ourvalues.png"}
        showButton
        bgColor={"white"}
        buttonTitle={"En savoir plus"}
      />
    </Box>
  );
};
