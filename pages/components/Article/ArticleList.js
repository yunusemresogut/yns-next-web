import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ArticleList.module.scss";
import { bindActionCreators } from "redux";
import * as articleAction from "../../../redux/actions/articleAction";

class ArticleList extends Component {
  componentDidMount() {
    this.props.actions.getArticle();
  }
  render() {
    return (
      <>
        {this.props.articles.map((article) => (
          <div key={article.id} className={styles["article-container"]}>
            <h1>{article.articleName}</h1>
            <p>{article.articlePost}</p>
          </div>
        ))}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    articles: state.articleListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getArticle: bindActionCreators(articleAction.getArticlePost, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
