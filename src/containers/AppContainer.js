import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'

// apollo imports
import ApolloClient, { addTypename } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  queryTransformer: addTypename
})

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render () {
    const { history, routes } = this.props
    return (
      <ApolloProvider client={client}>
        <div>
          <Router history={history} children={routes} />
        </div>
      </ApolloProvider>
    )
  }
}

export default AppContainer
