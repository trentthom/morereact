import React from 'react'
import Contacts from './Contacts'
function App() {
  return(
    <div>
      <Contacts
        contact={{name:"trent",  url:"http://www.fillmurray.com/200/200",email:"trent@",number:"123"}}
       />

       <Contacts
         contact={{name:"uhf",  url:"http://www.fillmurray.com/200/300",email:"trent@oijd",number:"453"}}
        />

    </div>
  )
}


export default App
