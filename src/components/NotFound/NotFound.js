import React from 'react';

const NotFound = () => {
  const foundStyle = {
      color: 'red',
      textAlign: 'center'
  }
  return (
    <div>
      <h1 style={foundStyle}>404!!!!Not Found the page....</h1>
    </div>
  );
};

export default NotFound;