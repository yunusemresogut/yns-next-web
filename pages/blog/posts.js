import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Image from "next/image";

function Posts() {
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div className="blog-container">
        <article>
          <h1>Blog yazısı</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            atque exercitationem at, minima quaerat nulla quo. Ducimus,
            molestiae obcaecati sapiente porro veritatis reprehenderit odio
            vero! At tempora molestias a maiores.
          </p>
        </article>
      </div>
    </Layout>
  );
}

export default Posts;
