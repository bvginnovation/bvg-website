'use client';

import React from 'react';
import { Box, Text, Heading } from "@chakra-ui/react";
import { useColorMode } from "_components/ui/color-mode";
import {Hero} from '_app/components/Hero';
import Content from '../components/Content';
import { Footer } from '_/app/components';

export default function ServicePage (){
    const colorMode = useColorMode();
   return (
     <Box bgColor={colorMode.colorMode === "light" ? "white" : "black"}>
         <Hero />
        <Text
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="justify"
        color="gray.700"
        mt={{ base: "lg", md: 20 }}
        m={{ base: 0, md: 10 }}
      >
        "Transformez votre présence en ligne en un atout puissant ! Un site web moderne, rapide et optimisé, c'est la clé pour attirer plus de clients, renforcer votre image de marque et booster votre activité. Chez BVG-INNOVATION, nous créons des sites web sur mesure qui allient performance, design et innovation. Prêt à passer au niveau supérieur "? 🚀
      </Text>
      <Heading
        as="h1"
        size={{ base: "2xl", md: "4xl" }}
        textAlign="center"
        color="blue.800"
        mt={8}
      >
        Différents Site Web
      </Heading>
        <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={true}
           />
        <Content
          title="Site Vitrine"
          description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
          advantages={[
                "Design moderne et responsive",
                "Optimisation SEO pour être visible sur Google",
                "Intégration de formulaires de contact et réseaux sociaux"
              ]}
           imageSrc="/assets/images/rectangle.png"
          isReversed={false}
        />
            <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={true}
           />
            <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={false}
           />
              <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={true}
           />
              <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={false}
           />
              <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={true}
           />
               <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={false}
           />
               <Content
             title="Site Vitrine"
             description="Un site vitrine est conçu pour présenter votre activité. Un site vitrine est conçu pour présenter votre activité, vos services et vos valeurs sur internet. Il sert à informer et attirer des clients tout en renforçant votre image de marque."
             advantages={[
               "Design moderne et responsive",
               "Optimisation SEO pour être visible sur Google",
               "Intégration de formulaires de contact et réseaux sociaux"
             ]}
             imageSrc="/assets/images/rectangle.png"
             isReversed={true}
           />
           <Footer />
     </Box>
   );
 };
