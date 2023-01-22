import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useColorSwitcher from "../../utils/useColorSwitcher";

const MobileNavLink = props => {
  const { colorDark, secondary } = useColorSwitcher();

  return (
    <Link to={`/${props.link}`} {...props}>
      <Button
        as="a"
        variant="ghost"
        aria-label="Contact"
        my={3}
        w="100%"
        color={colorDark}
        fontSize="lg"
        _after={{
          content: '""',
          position: "absolute",
          width: { base: "80%", lg: "100%" },
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: { base: "10%", lg: 0 },
          bg: secondary,
          transformOrigin: "bottom right",
          transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
        }}
        _hover={{
          _after: {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        }}
      >
        {props.name}
      </Button>
    </Link>
  );
};

export default MobileNavLink;
