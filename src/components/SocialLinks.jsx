import React from 'react';
import '../components/SocialLinks.css';
import linkedinIcon from '../media/linkedin-svgrepo-com.svg';
import githubIcon from '../media/github-142-svgrepo-com.svg';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/ousama6" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/ouzzy6" target="_blank" rel="noopener noreferrer" className="social-link">
        <img src={githubIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default SocialLinks;
