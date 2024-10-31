import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); 

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    
    navigate('#home'); 
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
          style={{ zIndex: 1000 }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
