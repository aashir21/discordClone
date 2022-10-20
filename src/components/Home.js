import React from 'react'
import '../dist/css/Home.css'
import NavBar from './NavBar'
import svg1 from '../discord-clone-img/HelloIMG1649758935926.svg'
import svg2 from '../discord-clone-img/HelloIMG1649758939172.svg'
import invite_only from '../discord-clone-img/HelloIMG1649758945533.svg'
import hanging_out from '../discord-clone-img/HelloIMG1649758956439.svg'
import fandom from '../discord-clone-img/HelloIMG1649758959520.svg'
import tech from '../discord-clone-img/HelloIMG1649758966682.svg'

function Home() {
  return (
    <main>

        <section className='hero-section'>
            <NavBar/>
            <div className='hero-container'>
                <div className='hero-txt'>
                    <h1 className='hero-title'>IMAGINE A PLACE...</h1>
                    <div className='para-holder'>
                        <p className='hero-para'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                    </div>
                    <span className='btn-holder'>
                        <a className='hero-download'><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2tQ9Jt"><g fill="#23272a"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg> Download for Windows</a>
                        <a className='hero-open-browser'>Open Discord in your browser</a>
                    </span>
                </div>
                <div className='resp-svgs'>
                    <img loading="lazy" src={svg1} alt='left-svg for responsive designs' className='resp-left-svg'></img>
                    
                </div>
            </div>
            

            <img loading="lazy" src={svg1} alt='left-svg for pc and larger screen' className='left-svg'></img>
            <img loading="lazy" src={svg2} alt='right-svg for pc and larger screen' className='right-svg'></img>
            


        </section>

        <section className='mid-section-section'>


            <div className='mid-section-container' >
                <div className='mid-section-img-holder'>
                    <img loading="lazy" src={invite_only} alt='invite only section svg homepage' className='mid-section-img'></img>
                </div>

                <div className='mid-section-text'>
                    <div className='mid-section-text-holder'>
                        <h2 className='mid-section-title'>Create an invite-only place where you belong</h2>
                        <p className='mid-section-para'>
                            Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='mid-section-section' style={{"backgroundColor":"#f6f6f6"}} >
            <div className='mid-section-container mid-sec'>
                <div className='mid-section-img-holder'>
                    <img loading="lazy" src={hanging_out} alt='hangout image section' className='mid-section-img'></img>
                </div>

                <div className='mid-section-text'>
                    <div className='mid-section-text-holder'>
                        <h2 className='mid-section-title'>Where hanging out is easy</h2>
                        <p className='mid-section-para'>
                            Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='mid-section-section'>
            <div className='mid-section-container'>
                <div className='mid-section-img-holder'>
                    <img loading="lazy" src={fandom} alt='fandom section svg homepage' className='mid-section-img'></img>
                </div>

                <div className='mid-section-text'>
                    <div className='mid-section-text-holder'>
                        <h2 className='mid-section-title'>From few to a fandom</h2>
                        <p className='mid-section-para'>
                            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className='tech-section'>
            
           <div className='tech-text'>
                <h1 className='tech-title'>RELIABLE TECH FOR STAYING CLOSE</h1>
                <p className='tech-para'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
           </div>   

            <div className='tech-img-holder'>
                <img loading="lazy" src={tech} className='tech-svg' alt="tech section homepage"></img>
            </div>

        </section>

        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-text'>
                    <h2 className='footer-title'>Ready to start your journey?</h2>
                    <div className='btn-holder'>
                        <a className='home-footer-btn' href='#' style={{"fontSize":"1.25rem", "textDecoration":"none"}}><svg width="24" height="24" viewBox="0 0 24 24" class="icon-2tQ9Jt"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>Download for Windows</a>
                    </div>
                </div>
            </div>
        </div>
 
    </main>
  )
}

export default Home