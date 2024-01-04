import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from "react-simple-animate";
import homPic from '../images/20231221_212926.jpg'

function Home() {
    const navigate = useNavigate();
    console.log(navigate)

const handleHomeContact = () => {
       navigate ('/contact' )
};

    return (
        <div className=''>
          <div class="hom">
            <div class="intro">
              <h2>Hey, I'm Peter.</h2>
              <h2>Front End Developer</h2>
              <div className='btns'>
                <Animate
                 play
                 duration={1.5}
                 delay={1}
                 start={{
                   transform: "translateY(550px)",
                 }}
                 end={{
                   transform: "translatex(0px)",
                 }}

                >
                  <button className='home-cont-butn' onClick={handleHomeContact}>Hire me</button>
                  <button className='resum'>Download my Resume</button>
                </Animate>
              </div>
            </div>
            <div class="intropic"><img src={homPic} alt=''/></div>
          </div>

          
        </div>
        

       
    )
}

export default Home