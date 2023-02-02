import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    console.log(nameRef.current); // <input type='text' placeholder='이름입력'>
    console.log(nameRef.current.value); //홍길동
    nameRef.current.value = '';
  };

  useEffect(() => {
    nameRef.current.focus(); // <input type='text' placeholder='이름입력'> -이 객체에 포커스를 줘라
  });

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;

//useref - 포커스 맞춰줄때 사용
