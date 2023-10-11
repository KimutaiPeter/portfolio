import { useState } from 'react'
import profile_logo from './assets/profile_img.svg'
import './style.css'
import instagram_logo from './assets/instagram_logo.svg'
import linkedin_logo from './assets/linkedin_logo.svg'
import facebook_logo from './assets/facebook_logo.svg'

function App() {

    function open(url){
        window.open(url,'_blank')
    }

  return (
    
      <div className="body">
        <div className="profile_intro">
            <div className="img_container">
                <img style={{width: '400px'}} src={profile_logo} alt=""></img>
            </div>

            <div className="intro_container">
                <span className="name_intro">Hi, I'm Peter.</span>
                <p className="career_intro">I am a Software engineer</p>
                <p className="body_intro">Journy with me, Lets go through life together sharing experiences, life lessons
                    and nuggets of
                    wisdom, sharing proud moments, sad moments and everything in between.</p>
            </div>
        </div>

        <div className="social_media_container">
            <div className="social" onClick={()=>{open('https://www.instagram.com/peter__kimutai/')}}>
                <img src={ instagram_logo } alt=""></img>
                <span>peter__kimutai</span>
            </div>

            <div className="social" onClick={()=>{open('https://www.linkedin.com/in/peter-kimutai')}}>
                <img src={linkedin_logo} alt=""></img>
                <span>Peter Kimutai</span>
            </div>

            <div className="social" onClick={()=>{open('https://www.facebook.com/profile.php?id=100090678885554')}}>
                <img src={facebook_logo} alt=""></img>
                <span>Peter Kimutai</span>
            </div>

        </div>
    </div>
  )



}

export default App
