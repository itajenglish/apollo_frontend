import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag' // NOTE: lets us define GraphQL queries in a template language

export class HomeView extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const author = this.props.data.author
    if (!author) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        <h1>{author.firstName}'s posts</h1>
        {author.posts && author.posts.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </div>
    )
  }
}

const query = gql`
query {
  author(firstName:"Edmond", lastName: "Jones"){
    firstName
    posts {
      title
    }
  }
}
`

export default graphql(query)(HomeView)
