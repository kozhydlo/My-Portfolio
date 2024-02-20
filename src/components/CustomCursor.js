import React, { useState, useEffect } from 'react';
import './castomCursor.css'; // Стилі для кастомного курсора
import appleCursor from '../assets/img/cursor.png'; // Шлях до зображення курсора

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="custom-cursor" style={{ left: position.x, top: position.y, backgroundImage: `url(${appleCursor})` }}></div>
  );
};

export default CustomCursor;
