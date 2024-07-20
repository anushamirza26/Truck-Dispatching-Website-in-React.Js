// src/components/ScrollIndicator.js
import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const sections = ['welcome', 'projects', 'skills', 'details', 'rmp', 'contact'];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(id => {
        const element = document.getElementById(id);
        return { id, offset: element ? element.offsetTop : 0 };
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentSection = offsets.reduce((prev, curr) => {
        return Math.abs(curr.offset - scrollPosition) < Math.abs(prev.offset - scrollPosition) ? curr : prev;
      });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      {sections.map(section => (
        <div
          key={section}
          className={`indicator ${activeSection === section ? 'active' : ''}`}
          onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;
