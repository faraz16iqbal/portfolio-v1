import { Box, Stack } from "@chakra-ui/react";
import useColorSwitcher from "../../utils/useColorSwitcher";
import { Body } from "../Typography";

export default function Bullet({ children, ...props }) {
  const { secondary } = useColorSwitcher();
  return (
    <Stack {...props} spacing={3} direction="row">
      <Box
        background={secondary}
        boxSize={{ base: "6px", md: "10px", lg: "12px" }}
        rounded="full"
        position="relative"
        top={{ base: "6px", md: "7px", lg: "8px" }}
      />
      {children && <Body>{children}</Body>}
    </Stack>
  );
}
