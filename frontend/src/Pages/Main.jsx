import React from 'react'
import './LandingPageStyle.css'
import BackImg from '../assets/b2.jpg';
import logo from '../assets/logo.jpg';
import team from '../assets/teams.png';
import WeText from '../components/WeText';

const Main = () => {
    return (
        <div>
            <main>
                <img src={BackImg} alt="backgound" id='bkimg' />
                <div className="section">
                    <h1 className='heading'>What is WeTalks?</h1>
                    <hr />
                    <div className="dividor">
                        <div className="left">
                            <div className="content">
                                <h3>Aim</h3>
                                <p>
                                    The 'WeTalks' is to allow people to communicate, and share their experience for anything or any situation in the world.
                                </p>
                            </div>
                            <div className="content">
                                <h3>Problem solved</h3>
                                <p>Stress reduction, loneliness elimination, and problem solving regarding any topic through suggestions from anyone in the world.</p>
                            </div>
                            <div className="content">
                                <h3>Description</h3>
                                <p>Nowadays, so many people want to know the advice of others in a particular matter or in a particular condition, so many people also want to share their experiences, their day-to-day life activity, and about themselves, so this platform will help them to anonymously share anything they want and to talk anybody within the world anonymously.</p>
                            </div>
                        </div>
                        <div className="right">
                            <img src={logo} alt="logo" id='logo' />
                        </div>
                    </div>
                    <center><button id='btn'><a id='sign' href='/Sign-in'>Sign in</a></button></center>
                </div>
                <br />
                <div className="section">
                    <h1 className='heading'>About Us</h1>
                    <hr />
                    <div className="dividor">
                        <div className="right">
                            <img src={team} alt="logo" id='logo' />
                        </div>
                        <div className="left">
                            <div className="content">
                                <h1 className='heading'>Our Team</h1>
                            </div>
                            <div className="content">
                                <h2>Pratham Ashok Asrani</h2>
                                <p> Email: asrnipa@rknec.edu <br />
                                    Mobile: +91 91454 95032 <br />
                                    <a href="https://www.linkedin.com/in/pratham-asrani-9897b0225">Linked In: https://www.linkedin.com/in/pratham-asrani-9897b0225</a>
                                </p>
                            </div>
                            <div className="content" id='paddAdd'>
                                <h2>Rajesh Kumar</h2>
                                <p> Email:  rajeshkumar828125@gmail.com <br />
                                    Mobile:  +91 92625 48802 <br />
                                    <a href="https://www.linkedin.com/in/rajesh-kumar-88b89223a">Linked In: https://www.linkedin.com/in/rajesh-kumar-88b89223a</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
