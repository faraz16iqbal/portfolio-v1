import React from "react";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import useColorSwitcher from "../utils/useColorSwitcher";
import { Body, Heading1, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { CircleArray } from "../components/miscellaneous/CircleArray";

const Homepage = () => {
  const { colorDark, secondary } = useColorSwitcher();

  return (
    <Box as="div" mt="12em">
      <Flex h={{ base: "100vw" }}>
        <Box
          as="section"
          w="100%"
          textAlign={{ base: "center", md: "left" }}
          h={{ base: "100vw" }}
        >
          <Flex
            flexDir="column"
            justifyContent="space-around"
            h={{ base: "500", lg: "400" }}
            alignItems={{ sm: "center", md: "flex-start" }}
          >
            <Text
              color={colorDark}
              fontFamily="Space Mono, monospace"
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="bold"
            >
              Hello, I'm
            </Text>
            <Heading1>Faraz Iqbal</Heading1>
            <Heading3 big={true} color={secondary}>
              Full-Stack Developer
            </Heading3>
            <Body
              w={{ base: "80%", xl: "40%" }}
              bg={{
                base: "red.200",
                xs: "yellow.200",
                sm: "blue.200",
                md: "green.200",
              }}
              fontWeight="bold"
            >
              A curiousity-driven coder with a passion for designing and
              building user-centric, inclusive experiences on the web.
            </Body>
            <PrimaryButton
              as="a"
              href="mailto:faraziqbal2001@gmail.com"
              theme={secondary}
              mt={4}
            >
              GET IN TOUCH
            </PrimaryButton>
          </Flex>
        </Box>
        <Box>
          <Center>
            <CircleArray
              strokeWidth="0.5px"
              fill={secondary}
              stroke={secondary}
              boxSize={{ base: "15em", md: "22em" }}
              display={{ base: "none", xl: "block" }}
            />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
