import { styled } from "@mui/system";

const ImageCardWrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
  borderRadius: "0px",
});

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(4, 4, 4, 0.5)", // 半透明の背景色
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff", // テキストの色
  padding: "2px", // パディング
  textAlign: "center",
});

const ImageCard: React.FC<{ imageUrl: string; title: string }> = ({
  imageUrl,
  title,
}) => {
  return (
    <ImageCardWrapper>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "0px" }}
      />
      <Overlay>
        <p>
          美しい字を書く喜びを知り
          <br />
          表現する楽しさを学ぶ
        </p>
      </Overlay>
    </ImageCardWrapper>
  );
};

export default ImageCard;
