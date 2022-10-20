import React from 'react'

import '../dist/css/Download.css'
import NavBar from './NavBar'
import hero from '../discord-clone-img/download-page-imgs/HelloIMG1649933921713.svg'
import iOS from '../discord-clone-img/download-page-imgs/HelloIMG1649933878123.svg'
import android from '../discord-clone-img/download-page-imgs/HelloIMG1649933913062.svg'
import linux from '../discord-clone-img/download-page-imgs/HelloIMG1649933868113.svg'
import mac from '../discord-clone-img/download-page-imgs/HelloIMG1649933938707.svg'

function Download() {
  return (
    <React.Fragment>
        <section className='download-hero'>
            <NavBar/>
            <div className='download-container'>
                <div className='download-text'>
                    <div className='download-text-holder'>
                        <h1>GET DISCORD FOR ANY DEVICE</h1>
                    </div>
                    <div className='download-para-holder'>
                        <p>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>
                    </div>
                    <div className='download-btn-holder'>
                        <button className='download-section-link'><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2tQ9Jt"><g fill="#FFFF"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg> Download for Windows</button>
                        <button className='windows-link'>Windows 7 or higher</button>
                    </div>
                </div>

                <div className='download-img'>
                    <img loading="lazy" className='download-section-img' src={hero} alt='hero image of a laptop showing call interface'></img>
                </div>
            </div>
        </section>

        <section className='devices-section'>
            <div className='devices-container'>
                <div className='device-grid'>
                    
                    <div className='device-card item-1'>
                        <div className='device-text'>
                            <h1 className='device-name'>iOS</h1>
                            <button className='device-download'>Download</button>
                        </div>
                        <div className='device-img'>
                            <img loading="lazy" src={iOS} alt="iOS device image" ></img>
                        </div>
                    </div>

                    <div className='device-card item-2'>
                        <div className='device-text'>
                            <h1 className='device-name'>Android</h1>
                            <button className='device-download'>Download</button>
                        </div>
                        <div className='device-img'>
                            <img loading="lazy" src={android} alt="android device image" ></img>
                        </div>
                    </div>

                    <div className='device-card item-3'>
                        <div className='device-text'>
                            <h1 className='device-name'>Linux</h1>
                            <button className='device-download linux'>Download <svg width="24" height="24" viewBox="0 0 32 32" fill="none" class="dropdownArrow-1My_3f"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z" fill="currentColor"></path></svg></button>
                        </div>
                        <div className='device-img'>
                            <img loading="lazy" src={linux} alt="linux device image" className='mobile-img'></img>
                        </div>
                    </div>

                    <div className='device-card item-4'>
                        <div className='device-text'>
                            <h1 className='device-name'>Mac</h1>
                            <button className='device-download'>Download</button>
                        </div>
                        <div className='device-img'>
                            <img loading="lazy" src={mac} alt="mac device image" className='mobile-img'></img>
                        </div>
                    </div>

                    <div className='experimental item-5'>
                        <div className='experimental-text'>
                            <h1>Feeling Experimental?</h1>
                            <p>Try our Public Test Build and test new features before they launch.</p>
                            <button>Download Public Test Build <svg className='exper-download-btn' width="24" height="24" viewBox="0 0 32 32" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z" fill="currentColor"></path></svg></button>
                        </div>
                    </div>

                </div>                
            </div>
        </section>

    </React.Fragment>
  )
}

export default Download