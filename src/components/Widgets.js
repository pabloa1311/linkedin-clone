import React from 'react'
import "../styles/Widgets.css"
import InfoIcon from '@mui/icons-material/Info';

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
    </div>
  )
}

export default Widgets