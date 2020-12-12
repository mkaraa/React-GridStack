import React from 'react'
import '../styles/header.scss'

export const Header = props => {
  return <span className='title'>{props.projectName}</span>
}
