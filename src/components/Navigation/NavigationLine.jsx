import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationLine = ({ items, className = '' }) => {
  return (
    <ul className={`navigation-line ${className}`}>
      {items.map((item, index) => (
        <NavigationItem
          key={index}
          label={item.label}
          href={item.href}
          isActive={item.isActive}
        />
      ))}
    </ul>
  );
};

export default NavigationLine;