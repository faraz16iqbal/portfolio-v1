import { Button } from "@chakra-ui/react";
import useColorSwitcher from "../../utils/useColorSwitcher";

export const StyledButton = ({
  hoverBg,
  hoverColor,
  focusBg,
  focusColor,
  size,
  bg,
  color,
  colorScheme,
  border,
  variant = "solid",
  children,
  ...props
}) => {
  return (
    <Button
      size={size}
      bg={bg}
      color={color}
      colorScheme={colorScheme}
      border={border}
      _hover={{ bg: hoverBg, color: hoverColor }}
      _active={{ bg: hoverBg, color: hoverColor }}
      rounded="none"
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export const PrimaryButton = ({
  children,
  theme,
  borderColor,
  w = "180px",
  h = "52px",
  size = { base: "md", sm: "xl" },
  ...props
}) => {
  const { colorLight, colorDark } = useColorSwitcher();
  return (
    <StyledButton
      {...props}
      w={w}
      h={h}
      size={size}
      variant="ghost"
      border="3px solid"
      borderColor={theme ? theme : colorDark}
      bg={colorLight}
      color={theme ? theme : colorDark}
      hoverBg={theme ? theme : colorDark}
      hoverColor={colorLight}
      children="Secondary"
    >
      {children}
    </StyledButton>
  );
};

export const SecondaryButton = ({
  children,
  theme,
  w = "180px",
  h = "52px",
  size = { base: "md", sm: "xl" },
  ...props
}) => {
  const { colorLight, colorDark, hoverDark } = useColorSwitcher();
  return (
    <StyledButton
      {...props}
      w={w}
      h={h}
      size={size}
      bg={colorDark}
      color={colorLight}
      hoverBg={hoverDark}
      children="Primary"
    >
      {children}
    </StyledButton>
  );
};
