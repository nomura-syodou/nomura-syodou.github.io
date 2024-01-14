// reason.tsx

import Head from "next/head";
import AppbarComponent from "../components/AppbarComponent";
import FloatingButtonToHome from "../components/FloatingButtonToHome";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import { Box } from "@mui/material";

const Reason: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${mincho.className}`}>
        <Head>
          <title>野村書道教室</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="UTF-8" />
          <meta name="description" content="伊丹・尼崎・西宮の書道教室です" />
          <meta name="keywords" content="書道教室, 習い事, 関西" />
          <meta name="lang" content="ja" />
          <link rel="icon" href="favicon.ico" />
        </Head>

        <AppbarComponent />

        <FloatingButtonToHome />
      </Box>
    </ThemeProvider>
  );
};

export default Reason;
