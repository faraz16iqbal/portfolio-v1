import React from "react";

import { Box, Center, Flex, Text } from "@chakra-ui/react";
import useColorSwitcher from "../utils/useColorSwitcher";
import { Body, Heading1, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { CircleArray } from "../components/miscellaneous/CircleArray";
import { motion } from "framer-motion";

const Homepage = () => {
  const { colorDark, secondary } = useColorSwitcher();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      exit={{ opacity: 0 }}
    >
      <Box as="div" mt={{ base: "4em", md: "8em" }}>
        <Flex justifyContent="center">
          <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
            <Flex
              flexDir="column"
              justifyContent="space-around"
              h={{ base: "500", lg: "500" }}
              alignItems={{ sm: "center", lg: "flex-start" }}
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
    </motion.div>
  );
};

export default Homepage;
