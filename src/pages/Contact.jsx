import React from "react";
import { Box } from "@chakra-ui/react";
import SectionHeader from "../components/miscellaneous/SectionHeader";
import { PrimaryButton } from "../components/Buttons";
import { Heading2, TextLarge } from "../components/Typography";
import useColorSwitcher from "../utils/useColorSwitcher";
import { motion } from "framer-motion";

const Contact = ({ ...props }) => {
  const { secondary } = useColorSwitcher();

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        mt={{ base: "4em", md: "5em" }}
        {...props}
      >
        <Box mb="72px">
          <SectionHeader mr="16px">
            <Heading2>contact</Heading2>
          </SectionHeader>
        </Box>
        <Box
          mx="auto"
          w={{ base: "90%", xl: "60%" }}
          display="grid"
          placeItems="center"
        >
          <TextLarge mb="32px" align="center">
            I'm currently open to freelance and actively looking for full-time
            job opportunties, so if you like what you've seen please don't
            hesitate to get in touch!
          </TextLarge>
          <TextLarge mb="64px" align="center">
            If you have any questions or would just like to say hi, my inbox is
            always open and I'll endeavour to get back to you as soon as I can.
          </TextLarge>
          <PrimaryButton
            as="a"
            href="mailto:faraziqbal2001@gmail.com"
            theme={secondary}
            mt={4}
          >
            GET IN TOUCH
          </PrimaryButton>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Contact;
