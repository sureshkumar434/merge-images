import React from 'react'
import Image from '../components/Image'

export const ImageWithTitle = ({images, title}) => {
  return (
    <>
    <h3>{title}</h3>
      <Image images={images}/>
    </>
  )
}
