import React from 'react'

const Avatar = ({url, alt, className}) => {
  return (
        <img loading='lazy' src={url} alt={alt} className={className} />
  )
}

export default Avatar