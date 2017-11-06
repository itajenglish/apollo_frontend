import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import ApolloClient, {
  createNetworkInterface,
  addTypename
} from 'graphql-tag'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:8080/graphql'),
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
