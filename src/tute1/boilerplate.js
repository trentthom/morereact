import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
  return(
    <div>
      <h1>REACT TUTE</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
)
