import React from 'react';
import { Helmet } from 'react-helmet';
import './Contacts.css';
import FadeIn from 'react-fade-in';


function Contacts() {

  return (
      <div className='contacts'>
        <Helmet>
          <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        </Helmet>
          <FadeIn transitionDuration='2000'>
            <div className = 'text'> Connect with me on LinkedIn
              <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="azizkhuja"><a class="LI-simple-link" href='https://www.linkedin.com/in/azizkhuja?trk=profile-badge'>Azizkhuja Asomiddinov</a></div>
              Send me an email at azizkhuja.asomiddinov562@gmail.com
            </div>
          </FadeIn>
      </div>
    )
}

export default Contacts;