import React from 'react'

import "./style.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://www.facebook.com/profile.php?id=100005252533465" target="_blank">
        <img
          src={`${process.env.PUBLIC_URL}/face-logo.png`}
          alt="facebook-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/swapnil-nayak-882038131/"
        target="_blank"
      >
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="LinkIn-icon"
        />
      </a>
      <a href="https://www.instagram.com/i_am___neil/" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
          alt="instagram-icon"
        />
      </a>
    </footer>
  );
};


export default Footer;
