import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1 className='footer-subscription-heading'>
          Wish you all of the best
        </h1>
        <p className='footer-subscription-text'>
          Follow me on social media :)
        </p>
        <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f fa-5x' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram fa-5x' />
            </Link>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-github fa-5x' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
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