import { Image } from "@chakra-ui/react";
import React from "react";

const ProjectImage = ({ src, alt, ...props }) => {
  return (
    <Image
      {...props}
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 3px" }}
      src={src}
      fallbackSrc="https://via.placeholder.com/500"
      alt={alt}
    />
  );
};

export default ProjectImage;
