import { Body } from "../Typography";
import { Image, VStack } from "@chakra-ui/react";

import useColorSwitcher from "../../utils/useColorSwitcher";

const SkillBox = ({ icon, name, ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <VStack
      align="center"
      justify="center"
      boxSize={{ base: "7em", md: "8em", xl: "10em" }}
      spacing={4}
    >
      <Image
        {...props}
        fill={colorDark}
        boxSize={{ base: "3em", xl: "5.5em" }}
        src={icon}
        fit="contain"
      />
      <Body
        textAlign="center"
        fontSize={{ base: "1em", md: "1.2em", xl: "1.5em" }}
      >
        {name}
      </Body>
    </VStack>
  );
};

export default SkillBox;
