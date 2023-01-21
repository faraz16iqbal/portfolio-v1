import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import useColorSwitcher from "../../utils/useColorSwitcher";

const SectionHeader = ({ heading, reverse = false, children, ...props }) => {
  const { colorDark } = useColorSwitcher();

  return (
    <Flex {...props} direction={reverse && "row-reverse"} align="center">
      {children}
      <Box display={{ base: "block" }} bg={colorDark} h={"2px"} w={"100%"} />
    </Flex>
  );
};

export default SectionHeader;
