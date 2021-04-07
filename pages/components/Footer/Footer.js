import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles["footer-container"]}>
          <h2>Kategoriler</h2>
          <section>
            <ul>
              <li>
                <Link href="">
                  <a>HTML</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>CSS</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Javascript</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>React</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Next</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles["footer-container"]}>
          <h2>İletişim</h2>
          <h3>Direkt olarak bu formu doldurup bana ulaşabilirsiniz.</h3>
          <form>
            <input type="text" placeholder="Ad Soyad" required />
            <input type="email" placeholder="E-posta Adresi" required />
            <textarea rows="3" placeholder="Açıklama" required></textarea>
            <input type="submit" value="Gönder" />
          </form>
          <h3>
            Ya da isterseniz sosyal medya hesaplarıma mesaj atabilirsiniz.
          </h3>
          <div className={styles["social-links"]}>
            <a href="https://www.instagram.com/ynsemrsgt/" target="_blank">
              <Image
                src="/icons/instagram.svg"
                alt="twitter"
                width="32"
                height="32"
              ></Image>
            </a>
            <a href="https://twitter.com/YunusEmreSgt" target="_blank">
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                width="32"
                height="32"
              ></Image>
            </a>
            <a href="https://github.com/yunusemresogut" target="_blank">
              <Image
                src="/icons/github.svg"
                alt="twitter"
                width="32"
                height="32"
              ></Image>
            </a>
            <a
              href="https://www.linkedin.com/in/yunus-emre-söğüt-055439ab"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="twitter"
                width="32"
                height="32"
              ></Image>
            </a>
            <a
              href="https://stackoverflow.com/users/14577131/yunus-emre-s%c3%b6%c4%9f%c3%bct?tab=profile"
              target="_blank"
            >
              <Image
                src="/icons/stack-overflow.svg"
                alt="twitter"
                width="32"
                height="32"
              ></Image>
            </a>
          </div>
        </div>
        <div className={styles["footer-container"]}>
          <h2>Abone olmak ister misin?</h2>
          <form>
            <input type="email" placeholder="E-posta Adresi" required />
            <input type="submit" value="Abone Ol" />
          </form>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>
          <strong>
            <Link href="/">Yunus Emre Söğüt</Link>
          </strong>{" "}
          | &copy; Copyright 2021 - Tüm hakları saklıdır.
        </p>
      </div>
    </>
  );
}

export default Footer;
