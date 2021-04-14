import * as actionTypes from "./actionTypes";

export function getArticle(article) {
  return {
    type: actionTypes.GET_ARTICLE,
    payload: article,
  };
}

export function getArticlePost(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/articles";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getArticle(data)));
  };
}
