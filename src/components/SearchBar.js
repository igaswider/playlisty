import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchForSong } from '../actions'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }
  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }
  reduxSubmit() {
    this.props.searchForSong(this.state.inputValue)
  }
  render(){
    console.log(this.props.songs)
    return (
      <div className="search">
        <input type="text" value={this.state.inputValue} onChange={(event) => this.handleInputChange(event)}/>
        <button onClick={(event) => this.props.handleSubmit(event, this.state.inputValue)}>search</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { searchForSong })(SearchBar)
