import { useState } from 'react';

const MyBasic002 = () => {
  //const [상태,변경함수] = useState(초기값)
  const [cnt, setCnt] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    // e.preventDefault()
    // html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데
    //e.preventDefault 는 그 동작을 중단시킨다.
    setCnt(cnt + 100);
  };
  return (
    <div>
      <p>
        cnt:<span>{cnt}</span>
      </p>
      <button onClick={handleClick}>CNT UPDATE</button>
    </div>
  );
};

export default MyBasic002;
