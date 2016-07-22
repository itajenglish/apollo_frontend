import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class HomeView extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className='home'>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, { params }) => ({

})

const mapDispatchToProps = (dispatch) => {
  const actions = {

  }

  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
