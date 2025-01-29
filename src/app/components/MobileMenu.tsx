import React from "react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "_components/ui/drawer";
import { HStack, IconButton, Flex, For, Link } from "@chakra-ui/react";
import { IoIosCloseCircle } from "react-icons/io";

const MobileMenu = ({
  open,
  link,
  onChange,
}: {
  open: boolean;
  link: { text: string; link: string }[];
  onChange: (value: any) => void;
}) => {
  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => onChange(e.open)}
      size={"sm"}
      closeOnEscape
    >
      <DrawerBackdrop />
      <DrawerContent height={"full"} pos={"absolute"}>
        <DrawerHeader>
          <HStack p={5} justifyContent={"space-between"}>
            <DrawerTitle>BVG-INNOVATION</DrawerTitle>
            <DrawerActionTrigger asChild>
              <IconButton
                aria-label="close-drawer"
                bgColor={"secondary.500"}
                color={"white"}
                onClick={() => onChange(false)}
              >
                <IoIosCloseCircle />
              </IconButton>
            </DrawerActionTrigger>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <Flex flexDir={"column"} gap={5}>
            <For each={link}>
              {(item: { text: string; link: string }, index: number) => (
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
              )}
            </For>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;
