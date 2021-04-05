import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import Navi from "../Navi/Navi";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anasayfa</title>
        <link rel="icon" href="/code-icon.svg" />
      </Head>
      <Navi></Navi>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
