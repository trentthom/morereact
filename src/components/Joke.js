import React from 'react'

function Joke(props) {
  console.log(props)
  return(
    <div className="joke">
      <h1> {props.card.question}</h1>
      <p> {props.card.punchline}</p>
    </div>
  )
}
export default Joke
