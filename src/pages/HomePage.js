import React from 'react'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube  } from '@fortawesome/free-brands-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                 Hi, I am  
              <span> Gordon Otieno</span>
                </h1>
       <p className="h-sub-text"> Gordon Otieno is a Computer Science graduate.
            He has a passion for software development.
             Has serve in the ministry of ICT, ICT department at 
             an internship capacity. he is a hardworking and a dedicated team play </p>
            
            <div className='icons'>
              <Link className="icon-holder">
              <FontAwesomeIcon icon={faFacebook} className="icon fb" />
              </Link>
              <Link className="icon-holder">
              <FontAwesomeIcon icon={faGithub} className="icon gh"/>
              </Link>
              <Link className="icon-holder">
              <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
              </Link>
            </div>
            </header>
            
        </div>
    )
}

export default HomePage
