import { ADD_ITEM, CHANGE_ITEM, DELETE_ITEM } from '../actions/types'
import { Map, List } from 'immutable'

const initialState = new Map({
  name: 'JS',
  age: 30,
  status: 'PRO',
  user: new Map({
    name: 'JS Alexander !',
    age: 30
  }),
  numbers: new List([1, 2, 3, 4, 5])
})

export default (state = initialState, action) => {
  console.log(state.get('numbers'))
  switch (action.type) {
    case ADD_ITEM:
      // return state.updateIn(['numbers', 1], val => val + action.payload)
      // return state.update('numbers', numbers => numbers.push(Math.random() * action.payload))
      return state.update('numbers', (numbers) =>
        numbers.filter((number) => number !== action.payload)
      )

    case DELETE_ITEM:
      return state.deleteIn([action.payload.user, action.payload.age])
    case CHANGE_ITEM:
      return state.updateIn(['user', 'name'], (name) => 'new JS name is Cool')

    default:
      return state
  }
}

/*
Counter:
* return state.update('age', (age) => age + action.payload)
*
* SetIn in Map:
* return state.setIn(['user', 'name'], 'New => JS !') //work for add new {key: value} fields
*
* Delete in Map:
* return state.deleteIn([action.payload.user, action.payload.age])  // user: { age: 100 }
*
* Update In Map inner field:
* return state.updateIn(['user', 'name'], (name) => 'new JS name is Cool') user: { name: 'JS' }
*
*
* Add and remove nested List items:
*     return state.updateIn(['numbers', 1], val => val + action.payload)
      return state.update('numbers', numbers => numbers.push(Math.random() * action.payload))
      return state.update('numbers', numbers => numbers.filter(number => number !== action.payload))
*
* */
