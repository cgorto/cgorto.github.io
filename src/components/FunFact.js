import React from 'react';
import './FunFact.css'; // Ensure the CSS file is correctly linked

const FunFact = ({ title, content, link }) => {
  return (
    <div className="fun-fact-box">
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer" className="fun-fact-link">
          {title}
        </a>
      </h3>
      <p>{content}</p>
    </div>
  );
};

export default FunFact;
