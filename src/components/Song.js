import React from 'react'

const Song = (props) => {
  return (
    <div className="song">
      <img src="" />
      <h2>{props.songName}</h2>
      <h3>{props.songArtist}</h3>
      <audio src="">
      </audio>
    </div>
  )
}

export default Song
