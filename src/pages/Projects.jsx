import React from "react";

import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

import SectionHeader from "../components/miscellaneous/SectionHeader";
import ProjectsList from "../utils/ProjectsList";

import { ProjectCard, ProjectInfoCard } from "../components/ProjectCard";
import { Heading2 } from "../components/Typography/index";

const Projects = ({ ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        outline="0"
        tabIndex={-1}
        minH="50vh"
        as="section"
        mx="auto"
        my="4em"
        {...props}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="128px">
          <SectionHeader mr="16px">
            <Heading2>projects</Heading2>
          </SectionHeader>
        </Box>
        {ProjectsList.map((project, id) => (
          <Flex
            mx="auto"
            flexDirection={{ base: "column", xl: "row" }}
            w="100%"
            p={{ md: "2em", lg: "3em" }}
            rounded="8px"
            key={id}
            boxShadow={{ md: "0 0 0 2px" }}
            alignItems={{ base: "center", xl: "unset" }}
            justify="left"
            spacing={4}
            mb="100px"
          >
            <ProjectCard media={project.media} w="100%" />
            <ProjectInfoCard length={project.length} {...project} />
          </Flex>
        ))}
      </Box>
    </motion.div>
  );
};

export default Projects;
