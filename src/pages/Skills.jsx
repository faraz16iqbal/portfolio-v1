import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import SectionHeader from "../components/miscellaneous/SectionHeader";
import {
  IconC,
  IconFB,
  IconGo,
  IconJS,
  IconMongo,
  IconNode,
  IconPostman,
  IconPython,
  IconReact,
  IconGit,
  IconDocker,
  IconFigma,
} from "../assets/icons";
import { Heading2 } from "../components/Typography";

import IconBox from "../components/miscellaneous/IconBox";
import { motion } from "framer-motion";

const Skills = ({ ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        {...props}
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="50px">
          <SectionHeader mr="16px">
            <Heading2>skills</Heading2>
          </SectionHeader>
        </Box>
        <Text
          pb="1em"
          fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
          textAlign="center"
        >
          Technologies & Tools I work with:
        </Text>
        <Grid
          mx="auto"
          py="5em"
          w={{ base: "100%", lg: "90%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          border="1px solid"
          gap={{ base: 8, md: 16 }}
          placeItems="center"
        >
          <Languages />
          <Frameworks />
          <Tools />
        </Grid>
      </Box>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <>
      <IconBox icon={IconC} name="C++" size={{ base: "3em", xl: "5.5em" }} />
      <IconBox
        icon={IconJS}
        name="JavaScript"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconPython}
        name="Python"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconGo}
        name="Golang"
        size={{ base: "3em", xl: "5.5em" }}
      />
    </>
  );
};
const Frameworks = () => {
  return (
    <>
      <IconBox
        icon={IconNode}
        name="NodeJS"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconReact}
        name="React"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconMongo}
        name="MongoDB"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconFB}
        name="Firebase"
        size={{ base: "3em", xl: "5.5em" }}
      />
    </>
  );
};

const Tools = () => {
  return (
    <>
      <IconBox
        icon={IconPostman}
        name="Postman"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox icon={IconGit} name="Git" size={{ base: "3em", xl: "5.5em" }} />
      <IconBox
        icon={IconDocker}
        name="Docker"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconFigma}
        name="Figma"
        size={{ base: "3em", xl: "5.5em" }}
      />
    </>
  );
};
export default Skills;
