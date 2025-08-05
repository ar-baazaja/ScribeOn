import React, { useEffect, useRef } from "react";
import "./InputField.css";

function InputField({ type, placeholder, value, onChange, icon }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    // Function to force dark styling
    const forceDarkStyling = () => {
      input.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      input.style.color = 'white';
      if (type === 'password') {
        input.style.webkitTextFillColor = 'white';
      }
    };

    // Force styling on mount
    forceDarkStyling();

    // Handle autofill detection
    const handleAnimationStart = (e) => {
      if (e.animationName === 'onAutoFillStart') {
        forceDarkStyling();
      }
    };

    // Listen for autofill events
    input.addEventListener('animationstart', handleAnimationStart);

    // Check for autofill periodically
    const checkAutofill = setInterval(() => {
      if (input.value && input.matches(':-webkit-autofill')) {
        forceDarkStyling();
      }
    }, 100);

    return () => {
      input.removeEventListener('animationstart', handleAnimationStart);
      clearInterval(checkAutofill);
    };
  }, [type]);

  const handleInputChange = (e) => {
    // Force dark background and white text
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    e.target.style.color = 'white';
    if (type === 'password') {
      e.target.style.webkitTextFillColor = 'white';
    }
    onChange(e);
  };

  const handleInputFocus = (e) => {
    // Force dark background on focus
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    e.target.style.color = 'white';
    if (type === 'password') {
      e.target.style.webkitTextFillColor = 'white';
    }
  };

  const handleInputBlur = (e) => {
    // Force dark background on blur
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    e.target.style.color = 'white';
    if (type === 'password') {
      e.target.style.webkitTextFillColor = 'white';
    }
  };

  const handleInputKeyUp = (e) => {
    // Force styling on every keystroke
    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    e.target.style.color = 'white';
    if (type === 'password') {
      e.target.style.webkitTextFillColor = 'white';
    }
  };

  return (
    <div className="input-field">
      <input
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleInputKeyUp}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          color: 'white',
          WebkitTextFillColor: type === 'password' ? 'white' : 'white'
        }}
      />
      {icon && <span className="icon">{icon}</span>}
    </div>
  );
}

export default InputField;
