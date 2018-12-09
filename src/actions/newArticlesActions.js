import { TEST_ACTION, DELETE_NEW_ARTICLE, ADD_NEW_ARTICLE } from '../constants';


export const testAction = payload => {
  return {
    type: TEST_ACTION,
    payload: payload
  }
}

export const deleteNewArticle = id => {
  return {
    type: DELETE_NEW_ARTICLE,
    payload: id
  }
}

export const addNewArticle = article => {
  return {
    type: ADD_NEW_ARTICLE,
    payload: article
  }
}


