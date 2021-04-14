import styles from "./Navi.module.scss";
import Link from "next/link";

function Navi() {
  return (
    <div className={styles.navigation}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/blog/posts">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkımda</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navi;
