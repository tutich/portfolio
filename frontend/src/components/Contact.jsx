import React from 'react';
import { Animate } from "react-simple-animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



function Contact() {

    const emailAddress = 'pkoinange02@gmail.com';
    return (
        <div>
            <h2>Let's Talk</h2>
            <div>
                <form action="">
                    <input
                    placeholder="Name"
                    type="text"
                    className='name'
                    />
                    <input
                    placeholder="Email"
                    type="email"
                    />
                    <textarea
                    placeholder="Say Something"
                    type="text"
                    rows="10" cols="40"
                    ></textarea>
                    <input
                    type="Submit"
                    />
                </form>
            </div>
            <div className='linkss'>
                <Animate
                play
                duration={2}
                delay={0.5}
                start={{
                  transform: "translateY(550px)",
                }}
                end={{
                  transform: "translatex(0px)",
                }}
                >
                    <a className='insta' href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a className='insta' href='https://twitter.com/home'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a className='insta' href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a className='insta' href='https://github.com/tutich'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/* <a href={`mailto:${emailAddress}`}>{emailAddress}</a> */}
                </Animate>
            </div>
        </div>
    )
}

export default Contact