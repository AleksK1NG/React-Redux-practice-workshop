import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addNewArticle, deleteNewArticle} from '../../actions/newArticlesActions'
import { newArticleSelector, newArticleTitlesSelector, newArtComboSelector } from '../../selectors';

class NewArticlesList extends Component {
  state = {
    id: '',
    title: '',
    rating: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const newArticle = {
      id: this.state.id,
      title: this.state.title,
      rating: this.state.rating
    }

    this.props.addNewArticle(newArticle)

    console.log('Submit form', newArticle)

    this.setState({
      id: '',
      title: '',
      rating: ''
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  render() {
    const { articlesList, deleteNewArticle, titles, newArtCombo } = this.props
    const { id, rating, title } = this.state


    return (
      <div>
        <h1>NewArticlesList</h1>
        <form onSubmit={this.handleSubmit}>
          <label>ID</label>
          <input
            value={id}
            onChange={this.handleChange}
            name="id"
            type="number"
          />
          <label>Title</label>
          <input
            value={title}
            onChange={this.handleChange}
            name="title"
            type="text"
          />
          <label>Rating</label>
          <input
            value={rating}
            onChange={this.handleChange}
            name="rating"
            type="number"
          />
          <button>Add Article</button>
        </form>
        {articlesList &&
        articlesList.map((article) => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>Rating is: {article.rating} </p>
              <button onClick={() => deleteNewArticle(article.id)}>
                Delete
              </button>
            </div>
          ))}
        <hr/>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  // articlesList: state.newArticles.articlesList,
  articlesList: newArticleSelector(state),
  // titles: newArticleTitlesSelector(state),
  // newArtCombo: newArtComboSelector(state)
})

export default connect(
  mapStateToProps,
  { deleteNewArticle, addNewArticle }
)(NewArticlesList)




