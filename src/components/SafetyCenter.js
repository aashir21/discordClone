import React from 'react'
import NavBar from './NavBar'
import '../dist/css/SafetyCenter.css'

function SafetyCenter() {
  return (
    <React.Fragment>

        <section className='safetycenter-wrapper'>
            <NavBar/>
            <div className='sC-hero-container'>
                <div className='sC-hero-text'>
                    <h1>DISCORD SAFETY CENTRE</h1>

                    <div className='sC-hero-card'>
                        <h2>What is Discord?</h2>
                        <p>Discord is a voice, video and text chat app that's used by tens of millions of people ages 13+ to talk and hang out with their communities and friends.</p>
                        <span><h4>Learn More</h4> <img alt="arrow svg for homepage" loading='lazy' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/6322e780df6ee24d4d83321f_ArrowButton.svg'></img></span>
                    </div>

                    <div className='sC-hero-card'>
                        <h2>Discord's commitment to a safe and trusted experience</h2>
                        <p>We work hard to ensure everyone on Discord is able to have meaningful conversations and spend time with their communities in a safe, positive and inclusive manner.</p>
                        <span><h4>Learn More</h4> <img alt="arrow svg for homepage" loading='lazy' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/6322e780df6ee24d4d83321f_ArrowButton.svg'></img></span>
                    </div>

                    <div className='sC-hero-card'>
                        <h2>Reporting problems to Discord</h2>
                        <p>If you encounter a violation of our Terms of Service or Community Guidelines, we ask that you report this behaviour to us.</p>
                        <span><h4>Learn More</h4> <img alt="arrow svg for homepage" loading='lazy' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/6322e780df6ee24d4d83321f_ArrowButton.svg'></img></span>
                    </div>
                </div>

                <div className='sC-hero-img'>
                    <img alt="hero side image with discord shield logo" loading='lazy' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/6322e5e39751c39ef989fffd_Group.svg'></img>
                </div>
            </div>
        </section>

        <section className='safety-wrapper'>
            <div className='safety-container'>
                <div className='safety-text'>
                    <h2>Safety</h2>
                    <img alt="safety svg for discord safety" loading='lazy' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/6343d3cc407836006bfbf106_zYVNm3SV-p-500.png'></img>
                    <p>Learn how to stay safe on Discord and about the tools and resources available to teens, parents and law enforcement.</p>
                    <br/>
                    <p>Learn about the resources available to teens and parents to help stay safe on Discord.</p>
                    <button>View all</button>
                </div>

                <div className='safety-card-con'>

                    <div className='safetyCard'>
                        <img alt="discord safety features svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/6318a869d1bc6357d2a2f42a_Policy__Safety_-_5.png'></img>
                        <h4>Parents & Educators</h4>
                        <h3>Helping your teen stay safe on Discord</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord safety features svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/6318a849d1bc6320d4a2f3a7_Policy__Safety_-_4.png'></img>
                        <h4>Controlling Your Experience</h4>
                        <h3>Tips against spam and hacking</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord safety features svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/6318a82aacd238402e0863e9_Policy__Safety_-_8_Hammer.png'></img>
                        <h4>Controlling Your Experience</h4>
                        <h3>Four steps to a super safe server</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord safety features svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/6318b4827536080c0c2e9784_Policy__Safety_-_8_Shield.png'></img>
                        <h4>Controlling Your Experience</h4>
                        <h3>Four steps to a super safe server</h3>
                    </div>

                </div>

            </div>
        </section>

        <section className='safety-wrapper'>
            <div className='safety-container'>
                <div className='safety-text'>
                    <h2>Moderation</h2>
                    <img alt="discord moderation svg for safety center" loading='lazy' style={{"scale":"0.85"}} src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/630e0ed045898401b20059ac_Moderation_illo%201.svg'></img>
                    <p>A comprehensive resource to learn about moderation, community management and more.</p>
                    <br/>
                    <p>An ever-growing resource for moderators of all skill levels to learn how to sharpen their abilities and foster great communities.</p>
                    <button>View all</button>
                </div>

                <div className='safety-card-con'>

                    <div className='safetyCard'>
                        <img alt="discord moderation svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/633a3701184a7c690976da0a_104.png'></img>
                        <h4>Basics</h4>
                        <h3>104: How To Report Content To Discord</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord moderation svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/633e23c6265740d91113f57c_206y1.png'></img>
                        <h4>Setup and Function</h4>
                        <h3>206: Best Practices for Reporting Tools</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord moderation svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/633e23d5483023e696deb859_314g1.png'></img>
                        <h4>Advanced Community Management</h4>
                        <h3>314: Training and Onboarding New Moderators</h3>
                    </div>

                    <div className='safetyCard'>
                        <img alt="discord moderation svg" loading='lazy' src='https://assets-global.website-files.com/625fe439fb70a9d901e138ab/633e25bb834cf467a7dce79e_442m1.png'></img>
                        <h4>Moderation Seminars</h4>
                        <h3>442: Using Insights to Improve Community Growth and Engagement</h3>
                    </div>

                </div>

            </div>
        </section>

    </React.Fragment>
  )
}

export default SafetyCenter