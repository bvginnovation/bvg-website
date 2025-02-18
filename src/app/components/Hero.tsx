"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  For,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BaseButton } from "_components/custom/button";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ColorModeButton } from "_/components/ui/color-mode";
import MobileMenu from "./MobileMenu";
import { ImageBackgroundComponent } from "./ImageBackgroundComponent";
import {
  MenuRoot,
  MenuContent,
  MenuItem,
  MenuTrigger,
  MenuTriggerItem,
} from "_/components/ui/menu";
import { ArrowDownIcon } from "_assets/svg";

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const responsiveMode = useBreakpointValue({ md: "web", base: "mobile" });

  const fakeLink = [
    { text: "Accueil", link: "" },
    { text: "Services", link: "" },
    { text: "Produit", link: "" },
    { text: "Societé", link: "", subMenu: ["Equipe", "A propos"] },
    { text: "Contact", link: "" },
  ];

  return (
    <ImageBackgroundComponent
      imgSrc={"assets/images/home.png"}
      height={"100vh"}
      color={"overlay"}
      opacity={0.72}
    >
      {/* Contenu superposé */}
      <Flex
        width={"full"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        {/* Logo */}
        <Flex
          bgColor={"primary.900"}
          width={{ base: "130px", md: "200px" }}
          height={{ base: "110px", md: "180px" }}
          borderBottomRightRadius={"full"}
          alignItems="flex-start"
        >
          <Box mt={{ base: 6, md: 10 }} ml={{ base: 2, md: 5 }}>
            <Image
              src={"/assets/images/bvg-icon.png"}
              alt={"bvg-icon"}
              width={responsiveMode === "web" ? 120 : 80}
              height={responsiveMode === "web" ? 120 : 80}
              priority
            />
          </Box>
        </Flex>
        {/* Menu */}
        <Box m={{ base: "4" }} display={{ base: "block", md: "none" }}>
          <IconButton
            bgColor={"primary.500"}
            color={"white"}
            aria-label="Search database"
            onClick={() => setOpen(true)}
          >
            <GiHamburgerMenu />
          </IconButton>
        </Box>

        {responsiveMode === "web" ? (
          <Flex m={8} gap={15} alignItems={"center"}>
            <Flex gap={10}>
              <For each={fakeLink}>
                {(item, index) =>
                  item.subMenu ? (
                    <Flex width={"full"}>
                      <MenuRoot key={index}>
                        <MenuTrigger bgColor={"none"} asChild color="white">
                          <Flex alignItems={"center"} gap={2}>
                            {item.text}
                            <ArrowDownIcon fill={"#fff"} />
                          </Flex>
                        </MenuTrigger>
                        <MenuContent p={2}>
                          {item.subMenu.map((subItem, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              value={subItem}
                              px={1}
                              py={2}
                            >
                              {subItem}
                            </MenuItem>
                          ))}
                        </MenuContent>
                      </MenuRoot>
                    </Flex>
                  ) : (
                    <Link
                      key={index}
                      position="relative"
                      fontSize="20px"
                      color="white"
                      textDecoration="none"
                      p="10px 20px"
                      _hover={{ textDecoration: "none" }}
                      css={{
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          borderRadius: "full",
                          height: "4px",
                          width: "100%",
                          background:
                            "linear-gradient(90deg, #1A3C8A, #F6A724, #ffffff)",
                          backgroundSize: "200% auto",
                          transition: "all 0.5s",
                          transform: "translateX(-100%)",
                          opacity: 0,
                        },
                        "&:hover::after": {
                          transform: "translateX(0%)",
                          animation: "gradient-89 3s linear infinite",
                          opacity: 1,
                        },
                        "@keyframes gradient-89": {
                          "0%": { backgroundPosition: "100% 0%" },
                          "50%": { backgroundPosition: "0% 0%" },
                          "100%": { backgroundPosition: "100% 0%" },
                        },
                      }}
                    >
                      {item.text}
                    </Link>
                  )
                }
              </For>
            </Flex>
            <ColorModeButton />
          </Flex>
        ) : (
          <MobileMenu
            open={open}
            onChange={() => setOpen(false)}
            link={fakeLink}
          />
        )}
      </Flex>
      {/* Texte et bouton centrés */}
      <Center
        height={{ base: "80%", md: "60vh" }}
        p={{ base: "10px", md: "0" }}
        flexDir={"column"}
        textAlign="center"
      >
        <VStack alignItems={"center"} gap={"20px"}>
          <Text
            fontSize={{ base: "20px", md: "46px" }}
            color="white"
            fontWeight={"semibold"}
          >
            Offrir et Innover les Meilleurs
            <br />
            <Text
              as="span"
              color="secondary.500"
              fontSize={{ base: "20px", md: "46px" }}
              whiteSpace="nowrap"
              overflow={"visible"}
              display="inline-block"
              position="relative"
              width="fit-content"
              animation={"textTypings"}
              css={{
                "&::before": {
                  content: '"|"',
                  position: "absolute",
                  right: "-10px",
                  color: "white",
                  animation: `blinkCursor`,
                },
              }}
            >
              Services du Digital
            </Text>{" "}
            {/* Texte animé */}
          </Text>
          <Box
            maxW={{ base: "100%", md: "800px" }}
            textAlign={"center"}
            lineHeight={2}
          >
            <Text color="white">
              Chez BVG-INNOVATION, nous transformons vos idées en solutions
              numériques élégantes et fonctionnelles. Créativité et expertise
              technique pour propulser votre projet vers le succès.
            </Text>
          </Box>
        </VStack>
        <BaseButton
          animation="fade"
          p={"30px"}
          fontWeight={"bold"}
          colorType={"primary"}
          mt={5}
        >
          Contactez-nous
        </BaseButton>
      </Center>
    </ImageBackgroundComponent>
  );
};
