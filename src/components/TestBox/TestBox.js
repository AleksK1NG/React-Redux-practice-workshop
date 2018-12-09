import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, changeItem, deleteItem } from '../../actions/testBoxActions'

class TestBox extends Component {
  render() {
    const { test } = this.props;
    console.log(test);
    return (
      <div>
        <h1>Test Box</h1>
        <hr/>
          <h1>{test.name}</h1>
          <h2>{test.age}</h2>
          <h2>{test.user.name}</h2>
          <h2>{test.user.age}</h2>
        <button onClick={() => this.props.addItem(2)}>Add Item</button>
        <button onClick={() => this.props.deleteItem({user: 'user', age: 'age'})}>Delete</button>
        <button onClick={() => this.props.changeItem()}>Change Item Action</button>
        {test.numbers.map(num => (
          <p key={num}>{num}</p>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  test: state.test.toJS()
})

export default connect(
  mapStateToProps,
  { addItem, deleteItem, changeItem }
)(TestBox)
