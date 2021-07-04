import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CategoryList from "../components/Category/Category";
//import ArticleList from "../components/Article/ArticleList";
import styles from "./blog.module.scss";

import getVideoId from "get-video-id";
import YouTube from "react-youtube";
import sanityClient from "../../sanity";
import SanityBlockContent from "@sanity/block-content-to-react";

function Blog({ posts }) {
  const [blockContent, setBlockContent] = useState();

  const fetchPostData = async (slug) => {
    const query = `*[ _type == "post" && slug.current == $slug]{
      body
    }[0]`;
    const singlePost = await sanityClient.fetch(query, { slug });

    const serializers = {
      types: {
        youtube: ({ node }) => {
          const { url } = node;
          const { id } = getVideoId(url);
          return <YouTube videoId={id} />;
        },
      },
    };
    setBlockContent(
      <SanityBlockContent
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        blocks={singlePost.body}
        serializers={serializers}
      />
    );
  };

  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div className={styles["blog-container"]}>
        <CategoryList></CategoryList>
        <section className={styles["post-section"]}>
          <div className={styles.posts}>
            {posts &&
              posts.map((post) => (
                <article key={post.slug.current}>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      fetchPostData(post.slug.current);
                      new WinBox({
                        title: post.title,
                        background: "#fff",
                        x: "center",
                        y: "center",
                        height: "70%",
                        width: "70%",
                        mount: document.querySelector(".single-post"),
                        onfocus: function () {
                          this.setBackground("#333");
                        },
                        onblur: function () {
                          this.setBackground("#999");
                        },
                      });
                    }}
                    className={styles["post-body"]}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span className={styles["post-info"]}>
                      <h3 className={styles["post-category"]}>
                        {post.categories ? post.categories : "No category"}
                      </h3>
                      <h3 className={styles["post-title"]}>{post.title}</h3>
                    </span>
                  </span>
                </article>
              ))}
          </div>
        </section>
        <div className={styles.hidden}>
          <div className={styles["single-post"]}>{blockContent}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = `*[ _type ==  "post"] | order(_createdAt desc){
    title,
    slug,
    "categories": categories[] -> title,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`;

  const posts = await sanityClient.fetch(query);

  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Blog;
