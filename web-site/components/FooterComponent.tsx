import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";
import theme from "../src/theme";

const FooterWrapper = styled("footer")({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(3),
  textAlign: "center",
  marginTop: theme.spacing(5),
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>
        <Typography variant="body2" color="inherit">
          &copy; 2024 野村書道教室
        </Typography>
      </FooterWrapper>
    </ThemeProvider>
  );
};

export default Footer;
