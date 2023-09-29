import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';

const AnimatedText = () => {
  const textRef = useRef();

  useEffect(() => {
    // تنظیمات iTyped
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['سقف های مشبک', 'طبق قانون کناف', 'سقف های فلت'],
    });
  }, []);

  return (
    <div className="text-secondary">
      <h1>
        <span>نصب </span>
        <span ref={textRef}></span>
      </h1>
    </div>
  );
};

export default AnimatedText;
