import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

const GridComponent = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: "teacher_stand.png", // 画像のURLを実際のものに置き換える
      title: "講師紹介",
      description: "指導する講師について紹介します",
      link: "/teacher", // リンク先のURLを実際のものに置き換える
    },
    {
      id: 2,
      imageUrl: "brushs.jpg", // 画像のURLを実際のものに置き換える
      title: "選ばれる理由",
      description: "当教室が選ばれる理由があります",
      link: "/reason", // リンク先のURLを実際のものに置き換える
    },
    {
      id: 3,
      imageUrl: "reason.jpg", // 画像のURLを実際のものに置き換える
      title: "受講案内",
      description: "受講の流れについて案内します",
      link: "/guidance", // リンク先のURLを実際のものに置き換える
    },
    {
      id: 4,
      imageUrl: "school_noma_inside.png", // 画像のURLを実際のものに置き換える
      title: "教室紹介",
      description: "開校日や所在についての紹介です",
      link: "/lecture", // リンク先のURLを実際のものに置き換える
    },
    {
      id: 5,
      imageUrl: "dragon.JPG", // 画像のURLを実際のものに置き換える
      title: "公式インスタグラム",
      description: "講師や受講生の作品を公開しています",
      link: "https://www.instagram.com/nomura_syodou/?hl=ja", // リンク先のURLを実際のものに置き換える
    },
  ];

  return (
    <Box className={`${mincho.className}`} sx={{ marginTop: 4 }}>
      <Grid container spacing={2}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Link href={card.link} passHref>
              <CardActionArea>
                <Card>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridComponent;
