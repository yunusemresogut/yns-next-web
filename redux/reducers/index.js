import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import articleListReducer from "./articleListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  articleListReducer,
});

export default rootReducer;
