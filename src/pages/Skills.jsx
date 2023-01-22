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
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box as="section" outline="0" tabIndex={-1} {...props} my="4">
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
      <IconBox icon={IconC} name="C++" />
      <IconBox icon={IconJS} name="JavaScript" />
      <IconBox icon={IconPython} name="Python" />
      <IconBox icon={IconGo} name="Golang" />
      {/* <IconBox icon={IconReact} name="React" /> */}
    </>
  );
};
const Frameworks = () => {
  return (
    <>
      <IconBox icon={IconNode} name="NodeJS" />
      <IconBox icon={IconReact} name="React" />
      <IconBox icon={IconMongo} name="MongoDB" />
      <IconBox icon={IconFB} name="Firebase" />
    </>
  );
};

const Tools = () => {
  return (
    <>
      <IconBox icon={IconPostman} name="Postman" />
      <IconBox icon={IconGit} name="Git" />
      <IconBox icon={IconDocker} name="Docker" />
      <IconBox icon={IconFigma} name="Figma" />
    </>
  );
};
export default Skills;
