import Image from "next/image";
import styles from "./page.module.css";
import { basePath } from "../../next.config"; // 追加
const BASE_PATH = basePath ? basePath : ""; // 追加

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>野村書道教室</p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={`${BASE_PATH}/top_sample.svg`}
          alt="Next.js Logo"
          width={512}
          height={180}
          priority
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>講師紹介</h2>
          <p>指導する講師について紹介します。</p>
        </div>

        <div className={styles.card}>
          <h2>選ばれる理由</h2>
          <p>当教室が選ばれる理由があります。</p>
        </div>

        <div className={styles.card}>
          <h2>教室案内</h2>
          <p>開講日や所在についての案内です。</p>
        </div>

        <a
          href="https://www.instagram.com/nomura_syodou/?hl=ja"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>公式Instagram</h2>
          <p>
            講師や受講生の作品を公開しています。（外部サイトが別タブで開きます）
          </p>
        </a>
      </div>
    </main>
  );
}
