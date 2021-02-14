import React from 'react'
import Joke from './Joke'

function App() {
  return(
    <div>
      <h1 className="heading">Jokes</h1>
        <Joke card={{question:" knock knock", punchline: "whos there"}}/>
        <Joke card={{question:" jimmy knucles", punchline: "whos boo"}}/>
        <Joke card={{question:" knock ", punchline: "whos gte"}}/>
        <Joke card={{question:" boss knock", punchline: "whos tree"}}/>
        <Joke card={{question:" knock knock", punchline: "whos after"}}/>
    </div>
  )
}

export default App
