import React from "react";
import { Link } from "react-router-dom";
import {FaReact, FaBars} from 'react-icons/fa';
import {HiX, hiX} from 'react-icons/hi'
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
                        
                <ul className={'dataa ${toggleIcon ? "active" : ""}'}>
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
                    {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
                </div>
            </nav>
        </div>

    )
}

export default Navbar