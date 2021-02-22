import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Follow me on social media :)
        </h1>
        <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='//www.facebook.com/azizasamiddinov/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f fa-5x' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='//www.instagram.com/aziz.158/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram fa-5x' />
            </Link>
            <Link
              class='social-icon-link github'
              to='//github.com/aziz158'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github fa-5x' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='//www.linkedin.com/in/azizkhuja/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin fa-5x' />
            </Link>
          </div>
      </section>
    </div>
  );
}

export default Footer;