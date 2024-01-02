import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



function Contact() {
    return (
        <div>
            <h3>Let's Talk</h3>
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
                    <input
                    placeholder="Say Something"
                    type="text"
                    />
                                   <input
                    type="Submit"
                    />
                </form>
            </div>
            <div>
                <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href='https://twitter.com/home'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href='https://www.linkedin.com'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href='https://github.com/tutich'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            </div>
        </div>
    )
}

export default Contact