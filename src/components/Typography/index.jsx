import { Heading, Text } from "@chakra-ui/react";

export const Heading1 = ({ children, ...props }) => {
  return (
    <Heading
      {...props}
      as="h1"
      py={{ base: "0.25em", md: "0.50em" }}
      fontSize={{ sm: "3em", md: "5em", lg: "6em" }}
      lineHeight={{ base: "0.5em" }}
    >
      {children}
    </Heading>
  );
};

export const Heading2 = ({ children, ...props }) => {
  return (
    <Heading
      as="h2"
      fontSize={{ base: "2.5em", md: "4em", lg: "5em" }}
      {...props}
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

export const TextLarge = ({ color, children, ...props }) => {
  return (
    <Text {...props} color={color} fontSize={{ base: "1em", md: "1.25em" }}>
      {children}
    </Text>
  );
};
