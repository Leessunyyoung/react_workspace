import React from 'react';
import './MyJsx3.css';

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className='line'> Line Test </div>
      {/* html에서는 class로 썼다면 jsx에서는 className으로 해준다 */}
    </>
  );
};

export default MyJsx003;
