import { useState } from 'react'
import profile_logo from './assets/profile_img.svg'
import './style.css'
import instagram_logo from './assets/instagram_logo.svg'
import linkedin_logo from './assets/linkedin_logo.svg'
import facebook_logo from './assets/facebook_logo.svg'

function App() {

    function open(url) {
        window.open(url, '_blank')
    }

    return (

        <div className="body">
            <div className="profile_intro">
                <div className="img_container">
                    <img style={{ width: '400px' }} src={profile_logo} alt=""></img>
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
                <div className="social" onClick={() => { open('https://github.com/KimutaiPeter') }}>
                    <img src='/github.svg' alt=""></img>
                    <span>KimutaiPeter</span>
                </div>

                <div className="social" onClick={() => { open('https://www.instagram.com/peter__kimutai/') }}>
                    <img src={instagram_logo} alt=""></img>
                    <span>peter__kimutai</span>
                </div>

                <div className="social" onClick={() => { open('https://www.linkedin.com/in/peter-kimutai') }}>
                    <img src={linkedin_logo} alt=""></img>
                    <span>Peter Kimutai</span>
                </div>

                <div className="social" onClick={() => { open('https://www.facebook.com/profile.php?id=100090678885554') }}>
                    <img src={facebook_logo} alt=""></img>
                    <span>Peter Kimutai</span>
                </div>
            </div>


            <div className="projects_container">
                <h2 style={{ 'font-weight': '600' }}>Projects</h2>
                <div className="projects_section_description">
                    <p>Check out some of my projects</p>
                </div>

                <div className="project_individual_container">
                    <div className="project_individual_title_container">
                        <h3>PrivyPDF</h3>
                    </div>
                    <div className="project_description_content_container">
                        <div className="project_description_content">
                            <p>A web based application that lets you merge, split or extract sensitive PDF documents safely and securely, all on your local machine, your document will not leave your computer.</p>
                            <div className="project_tools_description">
                                <img src="/firebase.png" alt="" />
                                <img src="/reactjs.png" alt="" />
                                <img src="/javascript.png" alt="" />
                            </div>
                            <button onClick={() => { open('https://sharespace-88021.web.app/') }}>Visit</button>
                        </div>

                        <div className="project_sample_image">
                            <img src="/privypdf.png" alt="" />
                        </div>
                    </div>
                </div>


                <div className="project_individual_container">
                    <div className="project_individual_title_container">
                        <h3>Mysharedspace</h3>
                    </div>
                    <div className="project_description_content_container">
                        <div className="project_description_content">
                            <p>A web base application that makes finding a roommate easier for university students.</p>
                            <div className="project_tools_description">
                                <img src="/firebase.png" alt="" />
                                <img src="/reactjs.png" alt="" />
                                <img src="/javascript.png" alt="" />
                            </div>
                            <button onClick={() => { open('https://my-sharedspace.web.app/') }}>Visit</button>
                        </div>

                        <div className="project_sample_image">
                            <img src="/home.PNG" alt="" />
                        </div>
                    </div>
                </div>

                <div className="project_individual_container">
                    <div className="project_individual_title_container">
                        <h3>KCSE results automatic processor</h3>
                    </div>
                    <div className="project_description_content_container">
                        <div className="project_description_content">
                            <p>A python script that automates: downloading KCSE results from the knec portal, processes the results and gives a comprehensive summary of the pupils performace</p>
                            <div className="project_tools_description">
                                <img src="/firebase.png" alt="" />
                                <img src="/reactjs.png" alt="" />
                                <img src="/javascript.png" alt="" />
                            </div>
                            <button onClick={() => { open('https://github.com/KimutaiPeter') }}>Visit</button>
                        </div>

                        <div className="project_sample_image">
                            <img src="/knec_portal.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )



}

export default App
