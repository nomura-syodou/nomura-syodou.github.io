// lecture.tsx
import HeadComponent from "..//components/Head";
import AppbarComponent from "../components/AppbarComponent";
import FloatingButtonToHome from "../components/FloatingButtonToHome";
import Footer from "../components/FooterComponent";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import { Box, Paper, Grid, Tabs, Tab, Slider, Slide } from "@mui/material";

import { experimentalStyled as styled } from "@mui/material/styles";

import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const tabStyles = {
  backgroundColor: "#043c78",
  color: "#FFFFFF",
};

const Nishikita: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${mincho.className}`}>
        <HeadComponent />

        <AppbarComponent />

        <Box sx={{ width: "100%" }}>
          <Tabs
            value="two"
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="school list"
            centered
          >
            <Link href="/lecture" passHref>
              <Tab value="one" label="伊丹野間教室" href="/lecture" />
            </Link>
            <Link href="/tsukaguchi" passHref>
              <Tab value="two" label="東塚口教室" />
            </Link>
            <Link href="/nishikita" passHref>
              <Tab value="three" label="西宮北口教室" sx={tabStyles} />
            </Link>
          </Tabs>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 2, sm: 4, md: 8 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Box sx={{ p: 2 }}>
                <h2>西宮北口教室</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>住所</td>
                      <td>西宮市甲風園1丁目7-8</td>
                    </tr>
                    <tr>
                      <td>電話番号</td>
                      <td>090-5647-6747</td>
                    </tr>
                    <tr>
                      <td>開講日</td>
                      <td>第２・第４金曜</td>
                    </tr>
                    <tr>
                      <td>時間</td>
                      <td>10:00〜12:00</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Box
                sx={{
                  border: "1px solid #e0e0e0", // アイテムごとの枠線
                  borderRadius: "8px", // 任意の角丸
                  overflow: "hidden", // 枠線が影響しないようにする
                }}
              >
                <img
                  src="school_nishikita_outside.png"
                  alt="東塚口教室内観"
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
            <Grid item xs={8} sm={8}>
              <Item>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13113.286586965773!2d135.34569571553658!3d34.74748956825031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f2389c72db37%3A0xf57a2ab6934283ba!2z55Sy6aKo55S76IuR!5e0!3m2!1sja!2sjp!4v1706416510520!5m2!1sja!2sjp"
                  width="100%"
                  height="450"
                  loading="lazy"
                ></iframe>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <FloatingButtonToHome />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Nishikita;
