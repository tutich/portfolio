import { Line } from 'rc-progress';
import React from 'react';

const skillsData = [
    
     {
        label : 'FRONTEND',
        data : [
            {
                skillName : 'HTML',
                percentage : '95',
            },
            {
                skillName : 'CSS',
                percentage : '80',
            },
            {
                skillName : 'JAVASCRIPT',
                percentage : '80',
            },
        ],
     },
 
        {label : 'BACKEND',
        data : [
            {
                skillName : 'NODE',
                percentage : '60',
            },
            {
                skillName : 'PYTHON',
                percentage : '10',
            },
            
        ],},

        {label : 'DATABASE',
        data : [
            {
                skillName : 'MYSQL',
                percentage : '20',
            },
            {
                skillName : 'mongoDB',
                percentage : '50',
            },
            
        ]}
    
];

function Skills() {
    return (
        <div className='skills'>
            <h2>My Skills</h2>
            <div className='skill'>
            {
                skillsData.map((item, i) => (
                    <div key={i}>
                        <h3>{item.label}</h3>
                        <div >
                            {
                                item.data.map((skillItem, j) => (
                                    <div key={j}>
                                      <p>{skillItem.skillName}</p>
                                      <Line
                                        percent={skillItem.percentage}
                                        strokeWidth='2'
                                        strokeColor='hsl(278, 68%, 11%)'
                                        trailWidth={'2'}
                                        strokeLineCap='square'
                                      />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Skills