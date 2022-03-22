import React from 'react'
import "./VideoPlayer.css"


function VideoPlayer(props) {
  return (
    <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${props.currentVideo}?autoplay=1&origin=http://example.com`}
  frameborder="0"></iframe>
  )
  
}

export default VideoPlayer