import { ADD_ITEM, CHANGE_ITEM, DELETE_ITEM } from './types'

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}
export const deleteItem = (item) => {
  return {
    type: DELETE_ITEM,
    payload: item
  }
}

export const changeItem = (item) => {
  return {
    type: CHANGE_ITEM,
    payload: item
  }
}
