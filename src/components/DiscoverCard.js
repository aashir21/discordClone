import React from 'react'
import '../dist/css/DiscoverCard.css'

function DiscoverCard(props) {
  return (
    <React.Fragment>

      <section className='discover-card-wrapper'>

          <div className='discover-card-img-holder'>
              <div className='d-c-img'>
                  <img alt="card image for discord community discover page" loading='lazy' src={props.img}></img> 
              </div>
          </div>

          <div className='discover-card-text'>
              <div className='discover-card-text-holder'>
                  <span>
                    <img height="32" width="32" src={props.svg}></img>
                    <h3>{props.title}</h3>
                  </span>
                  <p>{props.para}</p>
              </div>
          </div>
      </section>  

    </React.Fragment>
  )
}

export default DiscoverCard