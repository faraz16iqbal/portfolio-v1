import React, { useState } from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon } from "@chakra-ui/icons";
import { FaMoon } from "react-icons/fa";
import useColorSwitcher from "../../utils/useColorSwitcher";
import { NavLink } from "./NavLink";
import MobileNavLink from "./MobileNavLink";

const Navbar = props => {
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, SunIcon);
  const { toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const { colorLight } = useColorSwitcher();

  const buttons = [
    {
      name: "about",
      link: "about",
    },
    {
      name: "skills",
      link: "skills",
    },
    {
      name: "projects",
      link: "projects",
    },
    {
      name: "contact",
      link: "contact",
    },
  ];

  return (
    <Flex align="center" justifyContent="center" mt={7}>
      <Heading as="h3" fontFamily="Chelsea Market">
        F16
      </Heading>
      <Spacer />
      <Flex display={["none", "none", "none", "flex"]} width="xl">
        {buttons.map((b, id) => {
          return <NavLink name={b.name} link={b.link} key={id} />;
        })}
      </Flex>
      <IconButton
        aria-label="Open Menu"
        fontSize="xx-large"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => changeDisplay("flex")}
        display={["flex", "flex", "flex", "none"]}
        position="fixed"
        top="7"
        left="7"
      />
      <Spacer />
      <IconButton
        fontSize="xx-large"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />

      {/* Mobile */}

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor={colorLight}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-start">
          <IconButton
            mt={4}
            ml={5}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {buttons.map((b, id) => {
            return <MobileNavLink name={b.name} link={b.link} key={id} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
