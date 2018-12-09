import { TEST_ACTION, DELETE_NEW_ARTICLE, ADD_NEW_ARTICLE } from '../constants'
import { Map, Record, List, fromJS } from 'immutable';

const articles = [
  {
    id: 1,
    title: 'JS',
    rating: 100
  },
  {
    id: 2,
    title: 'JAVA',
    rating: 95
  },
  {
    id: 3,
    title: 'TypeScript',
    rating: 80
  },
  {
    id: 4,
    title: 'Kotlin',
    rating: 90
  },
  {
    id: 5,
    title: 'GO',
    rating: 60
  }
]

const initialState = {
  testField: null,
  articlesList: articles,
  isLoading: false,
  name: 'JS',
  numbers: [1,2,3,4,5,6]
}

export default (state = fromJS(initialState), action) => {
  console.log('state', state.get('name'));
  switch (action.type) {
    case TEST_ACTION:
      return { ...state, testField: action.payload }

    case DELETE_NEW_ARTICLE:
      return state.deleteIn(['articlesList', action.payload])
      // return {
      //   ...state,
      //   articlesList: state.articlesList.filter(
      //     (article) => article.id !== action.payload
      //   )
      // }
    case ADD_NEW_ARTICLE:
      return state.mergeIn(['articlesList'], action.payload)
    // return {
      //   ...state,
      //   articlesList: [...state.articlesList, action.payload]
      // }

    default:
      return state
  }
}


