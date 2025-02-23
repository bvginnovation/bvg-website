import {
  Box,
  Flex,
  Text,
  Center,
  useBreakpointValue,
  Separator,
  VStack,
  For,
  MenuContent,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { MailIcon, PhoneRingsIcon, ArrowDownIcon } from "_assets/svg";
import Link from "next/link";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { MenuRoot, MenuTrigger } from "_/components/ui/menu";

export const Footer = () => {
  const responsiveMode = useBreakpointValue({ md: "web", base: "mobile" });

  const renderContacts = [
    {
      icon: <RiMapPin2Fill />,
      label: "Avenue Ibn Khaldoun, Suisse, 400, Sousse, Tunisie",
    },
    { icon: <PhoneRingsIcon fill={"#fff"} />, label: "+(216) 51 719 140 " },
    {
      icon: <MailIcon fill={"#fff"} />,
      label: "contact.bgv.innovation@gmail.com",
    },
  ];

  const renderShortcuts = [
    { text: "Accueil", link: "" },
    { text: "Services", link: "" },
    { text: "Produit", link: "" },
    { text: "Societé", link: "", subMenu: ["Equipe", "A propos"] },
  ];

  const socialLinks = [
    {
      icon: "/assets/images/Facebook.png",
      link: "Avenue Ibn Khaldoun, Suisse, 400, Sousse, Tunisie",
    },
    { icon: "/assets/images/Instagram.png", link: "+(216) 51 719 140 " },
    {
      icon: "/assets/images/TikTok.png",
      link: "contact.bgv.innovation@gmail.com",
    },
    {
      icon: "/assets/images/Linkedin.png",
      link: "https://www.bvg-innovation.tech",
    },
  ];

  return (
    <Box w={"full"} mt={50}>
      <Flex bgColor={"primary.500"} width={"full"}>
        <Box
          pos={"relative"}
          width={{ base: "100%", mdOnly: "40%", lg: "30%" }}
          display={responsiveMode === "mobile" ? "none" : "block"}
        >
          <Image src={"/assets/images/forme.png"} />
          <Center pos="absolute" inset={0} zIndex={1000} width={"full"}>
            <Box width={"60%"}>
              <Image src={"/assets/images/bvg-icon-2.png"} alt={"bvg-icon"} />
            </Box>
          </Center>
        </Box>
        <Box position={"relative"} width={"full"} ml={5}>
          <Center h={"100%"} flexDir={"column"}>
            <Flex
              width={"full"}
              alignItems={"flex-start"}
              gap={"30px"}
              justifyContent={"center"}
              flexDir={{ base: "column", mdOnly: "row" }}
            >
              <Box width={"full"} color={"white"}>
                <Text>Contact</Text>
                <VStack gap={4} mt={8} alignItems={"flex-start"}>
                  <For each={renderContacts}>
                    {(item, index) => (
                      <Flex key={index} gap={4}>
                        {item.icon}
                        <Text>{item.label}</Text>
                      </Flex>
                    )}
                  </For>
                </VStack>
              </Box>
              <Box width={"full"} color={"white"}>
                <Text>Liens Raccourcis</Text>
                <VStack
                  flexDir={{ base: "row", md: "column" }}
                  gap={4}
                  mt={8}
                  alignItems={"flex-start"}
                >
                  <For each={renderShortcuts}>
                    {(item, index) =>
                      item.subMenu ? (
                        <Flex gap={5} width={"full"}>
                          <MenuRoot
                            key={index}
                            positioning={{
                              placement: "bottom",
                            }}
                          >
                            <MenuTrigger asChild color="white">
                              <Flex alignItems={"center"} gap={2}>
                                {item.text}
                                <ArrowDownIcon fill={"#fff"} />
                              </Flex>
                            </MenuTrigger>
                            <MenuContent>
                              {item.subMenu.map((subItem, subIndex) => (
                                <MenuItem key={subIndex} value={subItem} px={2}>
                                  {subItem}
                                </MenuItem>
                              ))}
                            </MenuContent>
                          </MenuRoot>
                        </Flex>
                      ) : (
                        <Link key={index} href={item.link} passHref>
                          <Text>{item.text}</Text>
                        </Link>
                      )
                    }
                  </For>
                </VStack>
              </Box>
            </Flex>

            <Box width={"full"} mt={{ base: 10, md: 4 }}>
              <Flex gap={"10px"}>
                <For each={socialLinks}>
                  {(item, index) => (
                    <Link key={index} href={item.link}>
                      <Image
                        src={item.icon}
                        alt={"icon"}
                        width={30}
                        height={30}
                        loading="lazy"
                      />
                    </Link>
                  )}
                </For>
              </Flex>
              <Separator size="sm" mt={{ base: 6, md: 5 }} />
              <Center mt={10} mb={{ base: 5, md: 0 }}>
                <Text color={"white"}>Copyright @ 2025 BVG-INNOVATION </Text>
              </Center>
            </Box>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};
