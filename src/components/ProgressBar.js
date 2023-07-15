import React from 'react'
import '../styles/ProgressBar.css'

const ProgressBar = ({ value, max }) => {
  const progress = (value / max) * 100; // Calculate the progress percentage

  return (
    <div className="progress-bar">
      <div className="progress-bar__fill" style={{ width: `${progress}%` }}>
        {`${progress.toFixed(0)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
