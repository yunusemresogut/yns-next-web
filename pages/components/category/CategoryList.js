import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CategoryList.module.scss";
import { bindActionCreators } from "redux";
import * as categoryAction from "../../../redux/actions/categoryAction";
import * as articleAction from "../../../redux/actions/articleAction";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getArticle(category.id);
  };
  render() {
    return (
      <div className={styles["category-list"]}>
        <ul>
          {this.props.categories.map((category) => (
            <li onClick={() => this.selectCategory(category)} key={category.id}>
              {" "}
              {category.categoryName}{" "}
            </li>
          ))}
        </ul>
        <h1 className={styles["category-header"]}>
          {this.props.currentCategory.categoryName}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryAction.getCategories, dispatch),
      changeCategory: bindActionCreators(
        categoryAction.changeCategory,
        dispatch
      ),
      getArticle: bindActionCreators(articleAction.getArticlePost, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
