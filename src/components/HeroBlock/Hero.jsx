import React from 'react';
import Button from '../Button/Button';
import { HashLink } from 'react-router-hash-link';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Test assignment for front-end developer</h1>
        <p className="hero-subtitle">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>

        <HashLink to="#form" smooth>
          <Button title="Sign up" />
        </HashLink>
      </div>
    </div>
  );
};

export default Hero;
