import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CategoryList from "../components/Category/Category";
//import ArticleList from "../components/Article/ArticleList";
import styles from "./blog.module.scss";
import { makeStyles } from "@material-ui/core/styles";

import getVideoId from "get-video-id";
import YouTube from "react-youtube";
import sanityClient from "../../sanity";
import { SanityBlockContent } from "@sanity/block-content-to-react";

import {
  Container,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    marginTop: theme.spacing(1),
  },
}));

function Blog({ posts }) {
  const classes = useStyles();

  const [blockContent, setBlockContent] = useState();

  useEffect(() => {}, []);

  const fetchPostData = async (slug) => {
    const query = `*[_type == "post" && slug.current == $slug]{
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
        <Container>
          {posts &&
            posts.map((post) => (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    title={post.mainImage.alt}
                  />
                  <CardContent>
                    <Typography gutturBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      key={post.slug.current}
                    >
                      {blockContent}
                    </Typography>
                    <Chip
                      label={`@ ${
                        post.author._ref ? post.author._ref : "Anonymous"
                      }`}
                      variant="outlined"
                      className={classes.chip}
                    />
                    <Chip
                      label={`# ${
                        post.categories ? post.categories : "No category"
                      }`}
                      variant="outlined"
                      className={classes.chip}
                    />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
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
                  >
                    Devamını oku...
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Container>
        <div className={styles.hidden}>
          <div className="single-post">{blockContent}</div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type ==  "post"] | order(_createdAt desc){
    title,
    slug,
    author{
      _ref,
    },
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
