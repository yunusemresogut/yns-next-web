import Head from "next/head";
import Link from "next/link";
import Layout from "./components/Layout/Layout";
import styles from "../styles/about.module.scss";

function About() {
  return (
    <Layout>
      <Head>
        <title>Hakkımda</title>
      </Head>
      <div className={styles["about-container"]}>
        <h1>Ben Kimim?</h1>
        <p>
          Hey sen, merhaba, benim adım Yunus Emre Söğüt. 1996 yılında Samsun'da
          dünyaya geldim. Küçüklüğümden beri bilgisayarlara, içediği
          teknolojilere ayrı bir merakım vardı. Oyunlar, uygulamalar, internet
          siteleri hep "Nasıl yapılıyor acaba?" diye düşünürdüm. Liseyi okurken
          boş zamanlarımda kendi kendime araştırdım, birşeyler öğrenmeye ve
          yapmaya başladım. Bunun bana keyif verdiğini gördüm ve yazılımla
          ilgili bir bölüm okumaya karar verdim. 2014 yılında Karadeniz Teknik
          Üniversitesi'nde İstatistik ve Bilgisayar Bilimleri bölümünü kazandım.
          Mezun olduktan sonra bir blog sitesi açmaya karar verdim ve işte
          buradayız.
        </p>
        <h1>Peki neler yapıyorum?</h1>
        <p>
          Daha çok internet sitelerinin Front-End (ön yüz) tarafında çalışmayı
          seviyorum. HTML, CSS (SASS, SCSS), Javascript (frameworklerinden
          React.js ve bunun kütüphanesi olan Next.js) ile geliştirmeler
          yapıyorum.
        </p>
        <h1>Burada ne bulabilirim?</h1>
        <p>
          Öncelikle keyif aldığım, ilgi duyduğum, güncel konular hakkında
          düşüncelerimi ve araştırdığım kadarıyla doğru bulduğum bilgileri
          paylaşmaya çalışıyorum.
        </p>
      </div>
    </Layout>
  );
}

export default About;
