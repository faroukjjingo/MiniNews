import React from 'react';
import { FiLoader } from 'react-icons/fi';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <FiLoader className="spinner-icon" />
      <p>Loading headlines...</p>
    </div>
  );
};

export default LoadingSpinner;