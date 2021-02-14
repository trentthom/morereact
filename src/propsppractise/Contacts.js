import React from 'react'

function Contacts(props){
  console.log(props)
  return(
    <div className="contact card">
        <img src={props.contact.url}/>
        <h3>{props.contact.name}</h3>
        <p>ph: {props.contact.number}</p>
        <p>email: {props.contact.email}</p>
    </div>
  )
}

export default Contacts
