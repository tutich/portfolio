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
          <h2>Hey, I'm Peter.</h2>
          <h2>Front End Developer</h2>
          <img src={homPic} alt=''/>

          <div>
            <button className='home-cont-butn' onClick={handleHomeContact}>Hire me</button>
          </div>
        </div>
        

       
    )
}

export default Home