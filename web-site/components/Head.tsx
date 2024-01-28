// Head.tsx

import Head from "next/head";

const HeadComponent = () => {
  return (
    <Head>
      <title>野村書道教室</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="地域で30年の実績。兵庫県 伊丹・尼崎・西宮の書道教室です"
      />
      <meta
        name="keywords"
        content="野村書道教室, 習字教室, 書道教室, 習い事, 関西"
      />
      <meta name="lang" content="ja" />
      <link rel="icon" href="favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
