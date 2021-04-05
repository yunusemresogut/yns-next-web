import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

function Posts() {
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
      </Head>
      <h1>Post</h1>
    </Layout>
  );
}

export default Posts;
