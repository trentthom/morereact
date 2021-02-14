import React from 'react'

function TodoItem(){

  const style = {
    color: 'red',
    fontSize: "25px"

  }
  return(
    <form>
      <input type="checkbox" id="1"/>
      <label style={style}for="1">checkbox</label>
    </form>
  )
}

export default TodoItem
