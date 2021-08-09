import React from 'react'
import ReactDOM from 'react-dom'
function Time(){
  const time =(
    <div>
      <h1>Hello</h1>
    <h2>Time is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
    ReactDOM.render(time , document.getElementById('root'))
}
setInterval(Time,1000)
