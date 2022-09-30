import React from 'react'

const NewCardButton = ({onClick, text}) => {
  return (
    <button className="newCardButton" onClick={onClick}>{text}</button>
  )
}

export default NewCardButton