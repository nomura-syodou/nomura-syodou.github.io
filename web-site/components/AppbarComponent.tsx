import { ThemeProvider } from "@mui/material/styles";
import { AppBar, Typography } from "@mui/material";
import theme from "../src/theme";

const AppbarComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="primary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // 左右中央に配置
          height: "60px", // 適切な高さを指定
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            letterSpacing: ".3rem",
            fontFamily: "Noto Serif JP, serif",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          野村書道教室
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppbarComponent;
