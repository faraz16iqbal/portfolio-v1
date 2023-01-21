import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useColorSwitcher from "../../utils/useColorSwitcher";

export const NavLink = props => {
  const { secondary } = useColorSwitcher();

  return (
    <Link to={`/${props.link}`}>
      <Button
        as="a"
        variant="ghost"
        aria-label="Home"
        w="100%"
        fontSize="lg"
        mx={4}
        _after={{
          content: '""',
          position: "absolute",
          width: { base: "40%", lg: "100%" },
          transform: "scaleX(0)",
          height: "2px",
          bottom: 0,
          left: { base: "30%", lg: 0 },
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
