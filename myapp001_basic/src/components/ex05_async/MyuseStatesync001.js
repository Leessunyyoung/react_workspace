import { useState } from 'react';

/*

REACT는 state가 변경이 될때마다 렌더링이 발생하낟.
React 렌더링이 발생되면 배치로 해서 처리한다.
배치 16ms 단위로 처리한다.
useState()은 비동기화로 처리한다.
*/
const MyuseStatesync001 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    setNumber(number + 1);
    console.log(number);

    setNumber(number + 1);
    console.log(number);

    setNumber(number + 3); //제일 마지막에 있는것이 비동기화 처리가된다.순차적으로 처리가 안된다.
    console.log(number); //이 number은 useState(0)을 처리해서 0이된다. 마지막것만 처리된다.
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

export default MyuseStatesync001;
