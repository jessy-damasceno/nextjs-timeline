import Box from "@src/components/Box";
import theme from "@src/theme/theme";
import styled from "styled-components";

const StyledBox = styled.div`
  color: purple;
`;

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: "red",
          md: "yellow",
        },
      }}
    >
      <StyledBox>Oi</StyledBox>
    </Box>
  );
}
