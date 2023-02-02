import React from 'react';

const MyJsx001 = () => {
  return (
    <div>
      <div>hello</div>
      <div>React</div>
    </div>
  );
};

//외부에서 사용할 수 있게
//export 할 경우에는 import { 함수명 } from * 으로 사용하는데,
//export default 하실 경우에는 import 함수명 from * 으로 사용하게 됩니다.
export default MyJsx001;
