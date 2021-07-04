import React from "react";
import styles from "./Category.module.scss";

//import sanityClient from "../../../sanity";

function Category({ categoryT }) {
  return <div className={styles["category-list"]}></div>;
}
/*

<ul>
        {categoryT &&
          categoryT.map((category) => (
            <li key={category.title}>{category.title}</li>
          ))}
      </ul>

*/
/*
export const getServerSideProps = async () => {
  const query = `*[ _type ==  "category"] | order(_createdAt desc){
    title,
    description,
  }`;

  const categoryT = await sanityClient.fetch(query);

  if (!categoryT.length) {
    return {
      props: {
        categoryT: [],
      },
    };
  } else {
    return {
      props: {
        categoryT,
      },
    };
  }
};
*/
export default Category;
