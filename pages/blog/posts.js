import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Image from "next/image";
import CategoryList from "../components/category/CategoryList";
import ArticleList from "../components/Article/ArticleList";

function Posts(props) {
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div className="blog-container">
        <CategoryList></CategoryList>
        <article>
          <ArticleList></ArticleList>
        </article>
      </div>
    </Layout>
  );
}

export default Posts;
