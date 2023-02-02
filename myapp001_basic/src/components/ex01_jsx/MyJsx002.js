import React, { Fragment } from 'react';

const MyJsx002 = () => {
  return (
    //부모는 하나여야된다 <div>
    //<div>로 하면 f12눌렀을때 확인해보면 불필요한 div가 포함이 되어있다
    //fragment로하면 불필요한 div없이 사용한다.
    //<></> -> Fragment대신 사용 가능
    // <Fragment>
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    // </Fragment>
  );
};

export default MyJsx002;
