// teacher.tsx

import HeadComponent from "..//components/Head";
import AppbarComponent from "../components/AppbarComponent";
import FloatingButtonToHome from "../components/FloatingButtonToHome";
import Footer from "../components/FooterComponent";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import { Grid, Typography, Box } from "@mui/material";

const Teacher: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${mincho.className}`}>
        <HeadComponent />

        <AppbarComponent />

        <Box
          sx={{
            backgroundColor: "#485f78",
            textAlign: "center",
            marginTop: 3,
            color: theme.palette.primary.contrastText,
            //padding: "1rem",
          }}
        >
          <h3>講師紹介</h3>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>日本書道研究会／理事　野村 龍岱</h3>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: 0,
                borderRadius: 2,
                boxShadow: 1,
                overflow: "hidden",
              }}
            >
              <img
                src="teacher_write.png"
                alt="説明"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0px",
                  margin: "0", // マージンを0に設定
                  display: "block", // 不要な余白を取り除くためにdisplayをblockに設定
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <h4>表現する楽しさを伝える「書」の伝道師</h4>
            指導を担当するのは、日本書芸研究会の理事にして、尼崎で30年以上の指導経験を持つ講師です。
            <br />
            ただ単にキレイな字を書くのではなく、字を書くリズムや個性を伸ばし、表現することの楽しさをお伝えいたします。はじめての方もお気軽にお越しください。
            {/* 右側のコンテンツをここに配置 */}
          </Grid>
        </Grid>

        <FloatingButtonToHome />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Teacher;
