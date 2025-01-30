import { Card, CardRootProps, Flex, For, List } from "@chakra-ui/react";
import React, { FC } from "react";
import { BaseButton } from "../button";
import { RiArrowRightLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import Image from "next/image";

interface Props extends CardRootProps {
  title: string;
  content?: any;
  isList: boolean;
  listItem: { value: string }[];
  showButton?: boolean;
  imgSrc: string | undefined;
}

export const BaseCard: FC<Props> = ({
  content,
  title,
  showButton = false,
  listItem,
  imgSrc = "",
  isList,
  ...rest
}) => {
  return (
    <Card.Root {...rest} rounded={"xl"} maxW="sm" overflow="hidden">
      <Image
        src={imgSrc}
        alt="Green double couch with wooden legs"
        width={500}
        height={500}
      />
      <Card.Body p={"20px"} gap="2">
        <Card.Title>{title}</Card.Title>
        {isList ? (
          <List.Root>
            <Flex
              gap={{ base: "6px", md: "10px" }} // Réduction du gap sur mobile
              mt={{ base: "5px", md: "10px" }} // Ajustement de la marge
              wrap={"wrap"} // Wrap sur mobile, pas sur desktop
              direction={{ base: "column", md: "row" }} // Colonne sur mobile, ligne sur grand écran
              alignItems={"flex-start"}
              justifyContent={{ base: "flex-start", md: "space-between" }} // Centrage sur mobile
            >
              <For each={listItem}>
                {(item, index) => (
                  <List.Item
                    _marker={{
                      color: "primary.500",
                    }}
                    key={index}
                  >
                    {item.value}
                  </List.Item>
                )}
              </For>
            </Flex>
          </List.Root>
        ) : (
          <Card.Description>{content}</Card.Description>
        )}
      </Card.Body>
      {showButton && (
        <Card.Footer justifyContent={"space-between"} p={"20px"} gap="2">
          <BaseButton
            bg={"none"}
            color={"primary.400"}
            rightIcon={<RiArrowRightLine />}
          >
            En savoir plus
          </BaseButton>
          <BaseButton
            rounded={"full"}
            width={"25px"}
            height={"25px"}
            bg={"#EFF6FF"}
            color={"primary.400"}
            p={"20px"}
          >
            <FaCode />
          </BaseButton>
        </Card.Footer>
      )}
    </Card.Root>
  );
};
