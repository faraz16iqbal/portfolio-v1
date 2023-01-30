import React, { useState, useEffect } from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Spacer,
  Heading,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import useColorSwitcher from "../../utils/useColorSwitcher";
import { NavLink } from "./NavLink";
import MobileNavLink from "./MobileNavLink";

import "./styles.css";

const Navbar = props => {
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const { toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");
  const [clicked, setClicked] = useState("false");
  const [boxClass, setBoxClass] = useState("");
  const { lightGreyBg, colorDark } = useColorSwitcher();

  useEffect(() => {
    changeDisplay("none");
  }, [clicked]);

  const buttons = [
    {
      name: "home",
      link: "",
    },
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
      <Box
        id="nav-icon2"
        onClick={() => {
          setBoxClass(prev => (prev === "" ? "open" : ""));
          changeDisplay(prev => (prev === "flex" ? "none" : "flex"));
        }}
        className={boxClass}
        display={["flex", "flex", "flex", "none"]}
      >
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
      </Box>
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

      {/* Mobile Content */}

      <Flex
        bgColor={lightGreyBg}
        flexDir="column"
        display={display}
        w="100vw"
        h="40vh"
        pos="fixed"
        top="20"
        left="0"
        overflowY="auto"
        zIndex={20}
      >
        <Flex flexDir="column" align="center">
          {buttons.map((b, id) => {
            return (
              <MobileNavLink
                name={b.name}
                link={b.link}
                key={id}
                onClick={() => {
                  setClicked(prev => prev ^ 1);
                  setBoxClass(prev => (prev === "" ? "open" : ""));
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
