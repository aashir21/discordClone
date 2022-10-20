import React from 'react'
import '../dist/css/DisclaimerPage.css'
import NavBar from './NavBar'

function DisclaimerPage() {
  return (
    <React.Fragment>

        <section className='disclaimer-hero'>
            
            <div className='disclaimer-container'>
                <div className='disclaimer-text'>
                    <h1>Note To Author. </h1>
                    <p>
                        This is a note to the original author of the website of Discord i.e www.discord.com.
                        This project is for personal use only and will not be used for any commercial purposes.
                        The code used to build this clone website has not been copied or stolen from the original Discord website.
                        <br/>

                        <h4>For further details, please contact - aashir_sidiki@hotmail.com</h4>
                        <button><a href='/'>Back to website</a></button>
                    </p>
                </div>
            </div>
        </section>

    </React.Fragment>
  )
}

export default DisclaimerPage