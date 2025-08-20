import React from 'react';
import NavigationLine from './NavigationLine';
import './Navigation.css';

const Navigation = ({ className = '' }) => {
  const firstLineItems = [
    { label: 'ABOUT US', href: '#about' },
    { label: 'CORE SERVICES', href: '#services' },
    { label: 'EVENTS', href: '#events' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const secondLineItems = [
    { label: 'BLOG', href: '#blog' },
    { label: 'FAQ', href: '#faq' },
    { label: 'TESTIMONIALS', href: '#testimonials' }
  ];

  return (
    <nav className={`two-line-navigation ${className}`}>
      <NavigationLine items={firstLineItems} className="nav-line-primary" />
      <NavigationLine items={secondLineItems} className="nav-line-secondary" />
    </nav>
  );
};

export default Navigation;