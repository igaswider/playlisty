import React, { Component } from 'react'
import Song from './Song'
import Loader from './Loader'

class MusicContainer extends Component {

  renderSongs() {
    return this.props.songList.map((el, index) => {
      const { artist: { name }, title } = el
      return <Song songArtist={name} songName={title} key={index}/>
    })
  }

  renderContent() {
    console.log(this.props.songList)
    if(this.props.songList.length > 0){
      return this.renderSongs()
    }
    return <Loader />
  }
  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

export default MusicContainer
