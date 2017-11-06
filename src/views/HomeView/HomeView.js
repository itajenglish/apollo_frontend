import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const authors = this.props.data.authors
    if (!authors) {
      return <h1>Loading</h1>
    }

    return (
      <div>
        {authors.map((author, idx) => (
          <div key={'author-' + idx}>
            <h1>{author.firstName}'s posts</h1>
            {author.posts && author.posts.map((post, idx) => (
              <li key={idx}>{post.title}</li>
            ))}
          </div>
        ))}
        <br />
        <div>
          <label>Add a post</label>
          <br />
          <input placeholder="Name" />
          <br />
          <input placeholder="Message" />
          <br />
          <button>Add Post!</button>
        </div>
      </div>
    )
  }
}

const query = gql`
query {
  authors {
    firstName
    posts {
      title
    }
  }
}
`

export default graphql(query)(HomeView)
