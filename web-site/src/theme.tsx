// theme.tsx

import { createTheme } from "@mui/material/styles";
import { Inter, Zen_Old_Mincho } from "next/font/google";

const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

const theme = createTheme({
  palette: {
    primary: {
      main: "#043C78",
      light: "#001B3D",
      dark: "#6A91D3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#405F90",
      light: "#141C29",
      dark: "#8991A2",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
