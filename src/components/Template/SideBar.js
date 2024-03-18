import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        {/* <img src={`${PUBLIC_URL}/images/DSPS1.png`} alt="" /> */}
        <img src={`${PUBLIC_URL}/images/DanielPalomino.JPG`} alt="" />
      </Link>
      <header>
        <h2>Daniel Palomino Suarez</h2>
        <p><a href="mailto:daniel.santiago918@hotmail.com">daniel.santiago918@hotmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Daniel. A passionate electronics engineer who
        enjoys overcoming challenges using technology.
        Enthusiastic about robotics, auonomous vehicles sports and knowledge.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Daniel Palomino <Link to="/">danielpalominos.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
