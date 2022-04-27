import React, {useState} from "react";
import './ProfileCard.css';
import ProfilePic from '../images/IMG_1336_cropped.jpg';

function ProfileCard(){


    const [name, setName] = useState('Azizkhuja Asomiddinov');
    const [job, setJob] = useState('Software Developer at General Motors');
    const [about, setAbout] = useState('Creative and highly motivated software engineer graduated from University of California Santa Cruz. Possessing hands-on experience in Front-end Back-end Fullstack and Mobile development. Carries strong knowledge of developing applications using C/C++, Javascript/CSS/HTML, Java and Python. Has thorough understanding of Computer Science concepts, Data Structures and Algorithms. Capable to work independently as well as working and making significant contribution to the team. Has solid understanding and practical experience of Software Development Lifecycle and Agile Methodologies. Enjoys stargazing, hiking in forest and playing chess.');


    return(
        <div className = 'card'>
            <div className = 'upper-container'>
                <div className = 'image-container'>
                    <img src={ProfilePic} alt='' height="100px" width = "100px" />
                </div>
            </div>
            <div className = 'lower-container'>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
            </div>
        </div>

    )
}

export default ProfileCard;
