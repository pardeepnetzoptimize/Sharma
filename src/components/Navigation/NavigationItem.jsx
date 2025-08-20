import React from 'react';

const NavigationItem = ({ label, href, isActive = false, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(href);
    }
  };

  return (
    <li className="navigation-item">
      <a
        href={href}
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        {label}
      </a>
    </li>
  );
};

export default NavigationItem;