import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategory(categories) {
  return {
    type: actionTypes.GET_CATEGORY,
    payload: categories,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(getCategory(data)));
  };
}

/*
export const fetchposts = () => async dispatch => {
  const res = await axios.get("api/posts");
  dispatch({
    type: types.GET_POSTS,
    payload: res.data
  })
}
*/
