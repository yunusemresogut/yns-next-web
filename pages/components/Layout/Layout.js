import Head from "next/head";
import styles from "./Layout.module.scss";
import Navi from "../Navi/Navi";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Yunus Emre SÖĞÜT | Blog" />
        <title>Anasayfa</title>
        <link rel="icon" href="/code-icon.svg" />
        <script type="text/javascript" src="js/winbox.bundle.js"></script>
      </Head>
      <Navi></Navi>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
