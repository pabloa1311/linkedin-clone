import React from 'react'
import "../styles/Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (<div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
        
    }

  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Pabloo quiere ser NDV", "Cuandooo se arriesgará???")}
        {newsArticle("Loquito por ti", "Loco loco")}
        {newsArticle("Loquito por ti", "Por ti por ti")}
        {newsArticle("Noticia 3", "jsjdjs djjd jdjdd")}
        {newsArticle("Noticia 4", "jsjdjs djjd jdjdd")}
        {newsArticle("Noticia 5", "jsjdjs djjd jdjdd")}
    </div>
  )
}

export default Widgets