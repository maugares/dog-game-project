import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getList } from '../../actions/setList'
import './HomePageContainer.css'

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.getList()
  }

  render() {
    return (
      <div>
        <div className='navigation'>
          <h1>Dog Learning APP</h1>
        </div>
        <div>
          <div className='links'>
            <Link to='/dog-list' className='link'>Link to the learning page</Link>
          </div>
          <div className='links'>
            <Link to='/dog-game' className='link'>Link to the game page</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { getList })(HomePageContainer)
