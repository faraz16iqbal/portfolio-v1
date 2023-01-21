import { Heading, Text } from "@chakra-ui/react";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading
      {...props}
      as="h1"
      py={{ base: "0.25em", md: "0.50em" }}
      fontSize={{ base: "3em", sm: "4em", md: "5em", lg: "6em" }}
      lineHeight={{ base: "0.5em", sm: 0 }}
    >
      {children}
    </Heading>
  );
};
export const Heading3 = ({ big = false, color, children, ...props }) => {
  let fontSize;
  if (big) {
    fontSize = { base: "1.25em", sm: "2em", md: "2.5em" };
  } else {
    fontSize = { base: "1.25em", sm: "1.5em", lg: "1.5em" };
  }
  return (
    <Heading
      {...props}
      as="h3"
      color={color}
      fontFamily={big ? "Poppins, sans-serif" : "Roboto Mono, monospace"}
      fontSize={fontSize}
      fontWeight="bold"
      lineHeight="1em"
      my="8px"
    >
      {children}
    </Heading>
  );
};

export const Body = ({ children, ...props }) => {
  return (
    <Text {...props} fontSize={{ base: "lg", sm: "lg", xl: "lg" }}>
      {children}
    </Text>
  );
};
