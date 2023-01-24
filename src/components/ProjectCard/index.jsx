import { Box, Stack } from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import Bullet from "../miscellaneous/Bullet";
import { Body, Heading3 } from "../Typography";

export const ProjectCard = ({ media, ...props }) => {
  return (
    <Box p="1em" {...props}>
      {media && media}
    </Box>
  );
};

export const ProjectInfoCard = ({
  name,
  info,
  live,
  repo,
  length,
  ...props
}) => {
  return (
    <Stack
      maxW={{ xxl: "40%" }}
      spacing={{ base: 8, xxl: 0 }}
      justify="space-between"
      p="1em"
      {...props}
      fontSize={{ base: "md", md: "lg" }}
    >
      <Stack spacing={8}>
        <Heading3 {...props} textAlign={{ md: "center" }}>
          {name}
        </Heading3>
        {info.length !== 0 && (
          <Stack spacing={8} as="ul">
            {info.map((item, index) => (
              <Stack spacing={3} direction="row" as="li" key={index}>
                <Bullet />
                <Body>{item}</Body>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
      {live !== null && repo !== null && (
        <Stack
          justify={!live && { md: "center", xl: "left" }}
          align="center"
          spacing={8}
          direction={{ base: "column", md: "row" }}
        >
          {live !== null && (
            <PrimaryButton w="100%" as="a" href={live}>
              LIVE SITE
            </PrimaryButton>
          )}
          {repo !== null && (
            <SecondaryButton w="100%" as="a" href={repo}>
              GITHUB REPO
            </SecondaryButton>
          )}
        </Stack>
      )}
    </Stack>
  );
};
