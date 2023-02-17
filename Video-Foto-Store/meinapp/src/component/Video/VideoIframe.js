import React from 'react'
import './Style.css'

const VideoIframe = ({ title, url}) => {
  return (
    <div className='video-container'>
    <iframe width="748" height="421" src={url} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoIframe