import React from 'react'
import "../styles/InputOptions.css"

function InputOptions({title, Icon, color}) {
  return (
    <div className='inputOption'>
        <Icon style={{color: color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions