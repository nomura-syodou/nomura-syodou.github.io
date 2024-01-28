// reason.tsx

import HeadComponent from "..//components/Head";
import AppbarComponent from "../components/AppbarComponent";
import FloatingButtonToHome from "../components/FloatingButtonToHome";
import Footer from "../components/FooterComponent";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import {
  Box,
  Divider,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

const Guidance: React.FC = () => {
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
          <h3>受講案内</h3>
        </Box>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box sx={{ mt: 3 }}>
              <Paper sx={{ px: 2, py: 1, border: 1, borderColor: "#8a9fe6" }}>
                <h3>毛筆・硬筆どちらも可能な個別指導</h3>
                <Divider />
                <Box sx={{ my: 2 }}>
                  当教室では毛筆の他に、細字やペン字といった硬筆の指導も行っております。
                  <br />
                  子供の内からキレイな字を身につけさせたい、仕事での印象アップにつなげたいという方におすすめです。レッスンはすべて個別指導で、実際に講師が手本を書いて見せながら進めます。
                </Box>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={10} md={6} lg={4}>
            <Box sx={{ mt: 3 }}>
              <Paper sx={{ px: 2, py: 1, border: 1, borderColor: "#8a9fe6" }}>
                <h3>月謝</h3>
                <Divider />
                <Box sx={{ my: 2 }}>
                  <p>まずは無料体験から、お気軽にお越しください！</p>
                  <Table>
                    <TableHead>
                      <TableRow
                        sx={{
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.primary.contrastText,
                        }}
                      >
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                            color: theme.palette.primary.contrastText,
                          }}
                        >
                          幼・小・中学
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                            color: theme.palette.primary.contrastText,
                          }}
                        >
                          高校
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                            color: theme.palette.primary.contrastText,
                          }}
                        >
                          一般
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                          }}
                        >
                          4,500円
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                          }}
                        >
                          5,100円
                        </TableCell>
                        <TableCell
                          sx={{
                            border: "1px solid",
                            borderColor: "#8a9fe6",
                          }}
                        >
                          6,100円
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Typography variant="body2" align="right">
                    ※おけいこは月4回です。
                  </Typography>
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

export default Guidance;
