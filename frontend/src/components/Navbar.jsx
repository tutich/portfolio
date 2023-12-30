import React from "react";
import { Link } from "react-router-dom";
import {FaReact} from 'react-icons/fa';
import { useState } from "react";

const data = [
    {
        label : 'HOME',
        to : '/',
    
    },

    {
        label : 'ABOUT ME',
        to : '/about',
    
    },
    
    {
        label : 'SKILLS',
        to : '/skills',
    
    },

    {
        label : 'PORTFOLIO',
        to : '/portfolio',
    
    },

    {
        label : 'CONTACT',
        to : '/contact',
    
    },
];








function Navbar (to) {
const [toggleIcon, setToggleIcon] = useState(false);

const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);

 };

    return (
        <div>
            <nav>
                <div>
                    {/* <Link to={'/'}>
                    <FaReact size={30}/>
                    </Link> */}
                </div>
                        
                <ul>
                    {
                        data.map((item, key) => (
                            <li key={key}>
                                <Link to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                    
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                </div>
            </nav>
        </div>

    )
}

export default Navbar