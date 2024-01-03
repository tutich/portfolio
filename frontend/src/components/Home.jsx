import React from 'react';
import { useNavigate } from 'react-router-dom';
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
              <div>
                <button className='home-cont-butn' onClick={handleHomeContact}>Hire me</button>
               <button className='resum'>Download my Resume</button>
              </div>
            </div>
            <div class="intropic"><img src={homPic} alt=''/></div>
          </div>

          
        </div>
        

       
    )
}

export default Home