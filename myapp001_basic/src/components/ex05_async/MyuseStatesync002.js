import { useState } from 'react';

/*

REACT는 state가 변경이 될때마다 렌더링이 발생하낟.
React 렌더링이 발생되면 배치로 해서 처리한다.
배치 16ms 단위로 처리한다.
useState()은 비동기화로 처리한다.
*/

// MyuseStatesync001은 차곡차곡 쌓였다가 제일 마지막꺼만 처리해주고 MyuseStatesync002은 콜백함수를 이용해 차례대로 처리해준다.
const MyuseStatesync002 = () => {
  //state의 값을 순차적으로 변경할 때 콜백함수를 사용한다.
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    setNumber((number) => number + 1); //콜백함수를 호출해 처리하면 순차적으로 처리된다.

    setNumber((number) => number + 1);

    setNumber((number) => number + 1);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};

export default MyuseStatesync002;
