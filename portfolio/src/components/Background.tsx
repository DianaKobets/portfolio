import React, { useEffect, useState } from 'react';
import './Background.css';

const getRandomPosition = (max: number) => Math.floor(Math.random() * max);
const getRandomSize = () => Math.floor(Math.random() * (149)) + 100;

const Background: React.FC = () => {
  const [circles, setCircles] = useState(Array.from({ length: 13 }).map((_, index) => ({
    id: index + 1,
    top: getRandomPosition(100),
    left: getRandomPosition(100),
    size: getRandomSize(),
    visible: true,
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map(circle => ({
          ...circle,
          visible: false, 
        }))
      );

      setTimeout(() => {
        setCircles((prevCircles) =>
          prevCircles.map(circle => ({
            ...circle,
            top: getRandomPosition(100),
            left: getRandomPosition(100),
            size: getRandomSize(),
            visible: true,
          }))
        );
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[25rem] z-0">
      {circles.map(circle => (
        <div
          key={circle.id}
          className={`circle ${circle.visible ? '' : 'fade-out'}`}
          style={{
            position: 'absolute',
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
