import { Body } from "../Typography";
import { Image, VStack } from "@chakra-ui/react";

import useColorSwitcher from "../../utils/useColorSwitcher";

const SkillBox = ({ icon, name, size, link, ...props }) => {
  const { colorDark } = useColorSwitcher();

  return (
    <VStack
      align="center"
      justify="center"
      boxSize={{ base: "7em", md: "8em", xl: "10em" }}
      spacing={4}
    >
      {link ? (
        <a target="_blank" href={link} rel="noreferrer">
          <Image
            {...props}
            fill={colorDark}
            boxSize={size}
            src={icon}
            fit="contain"
          />
        </a>
      ) : (
        <Image
          {...props}
          fill={colorDark}
          boxSize={size}
          src={icon}
          fit="contain"
        />
      )}

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
