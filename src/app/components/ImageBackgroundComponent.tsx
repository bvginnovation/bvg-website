import { Box, Center, Heading } from "@chakra-ui/react";
import { Colors, hexToRGB } from "_theme/colors";
import React, { ReactNode } from "react";

export const ImageBackgroundComponent = ({
  imgSrc,
  height,
  color,
  opacity,
  isCenter = false,
  children,
}: {
  imgSrc: string;
  height:
    | { base?: string | number; md?: string | number; lg?: string }
    | string;
  color: keyof Colors;
  opacity: number;
  isCenter?: boolean;
  children: ReactNode;
}) => {
  return (
    <Box width={"full"} height={height} pos={"relative"}>
      {/* Image de fond */}
      <img
        src={imgSrc}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      {/* Overlay pour assombrir l'image */}
      <Box pos="absolute" inset={0} bgColor={hexToRGB(color, opacity)} />
      {isCenter ? (
        <Center pos="absolute" inset={0} zIndex={2} width={"full"}>
          <Heading color={"white"} size={{ base: "xl", md: "6xl" }}>
            {children}
          </Heading>
        </Center>
      ) : (
        <Box pos="absolute" inset={0} zIndex={2} width={"full"}>
          {children}
        </Box>
      )}
    </Box>
  );
};
