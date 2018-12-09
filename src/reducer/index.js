import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import newArticlesReducer from './newArticlesReducer';
import tetstBoxReducer from './tetstBoxReducer';

export default combineReducers({
  counter: counterReducer,
  articles,
  comments,
  filters,
  newArticles: newArticlesReducer,
  test: tetstBoxReducer
})
