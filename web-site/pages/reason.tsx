// reason.tsx

import HeadComponent from "..//components/Head";
import AppbarComponent from "../components/AppbarComponent";
import FloatingButtonToHome from "../components/FloatingButtonToHome";
import Footer from "../components/FooterComponent";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import { Box, Divider, Grid, Paper } from "@mui/material";

const Reason: React.FC = () => {
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
          <h3>選ばれる理由</h3>
        </Box>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box sx={{ mt: 3 }}>
              <Paper sx={{ px: 2, py: 1, border: 1, borderColor: "#8a9fe6" }}>
                <h3>自分のペースで無理なく通える</h3>
                <Divider />
                <Box sx={{ my: 2 }}>
                  当教室は伊丹市・尼崎市・西宮市にそれぞれ教室を持ち、平日・土曜にレッスンを行っております。
                  <br />
                  1回のレッスン時間などはとくに設けておらず、開講時間内であれば、誰でもレッスンを受けることが可能です。忙しくて決まった時間に通うことができない方も、自分のペースで無理なく通うことができる環境となっております。
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box sx={{ mt: 3 }}>
              <Paper sx={{ px: 2, py: 1, border: 1, borderColor: "#8a9fe6" }}>
                <h3>実際に手本を見せる本格レッスン</h3>
                <Divider />
                <Box sx={{ my: 2 }}>
                  手本のコピーだけ見ても、運筆（筆の動き）や書き順などはわかりません。
                  <br />
                  コピーを渡す教室が増えてきた中で、当教室は20年間変わらず、生徒一人ひとりにその場でお手本を書いて見せています。見本代はかかりませんので、じっくりと見て学び取ることができます。
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box sx={{ mt: 3 }}>
              <Paper sx={{ px: 2, py: 1, border: 1, borderColor: "#8a9fe6" }}>
                <h3>無料体験で自分のレベルを知ることができる</h3>
                <Divider />
                <Box sx={{ my: 2 }}>
                  当教室ははじめて書道に挑戦される方や、教室の雰囲気を知っておきたい方のために、無料の体験レッスンをご用意しております。
                  <br />
                  実際に書いてみることで自分のレベルやどんな指導が必要なのかを知り、継続して受講することで上達を目指しましょう。
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <FloatingButtonToHome />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Reason;
