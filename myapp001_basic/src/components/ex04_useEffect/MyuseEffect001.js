/*
  useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
  특정작업(side effect) : Time(setTimeout), Ajax ->비동기화 작업처리되는것들
  useEffect: useEffect는 side effect라는 뜻이다.
  useEffect 4가지 종류
  1. useEffect(callback) : 마운트 후, 리렌더링 될때마다
  2. useEffect(callback,[]) : 마운트 후 딱한번
  3. useEffect(callback, [state]) : 마운트 후, state값이 변경될때에만 ---제일많이 사용된다.
  4. useEffect(callback() { return();}, []) : 마운트 후,리턴되는값이 있을때 언마운트 전(종료가 되기전)


*/

import { useEffect, useState } from 'react';

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value); //이벤트가 발생되었을때 객체의 값을 가져옴.
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    console.log('렌더링이 되었습니다'); //처음에 렌더링이 되었습니다 2번출력되는이유 index.js에서 React.StrictMode때문이다. 상관안해두댐
  });

  useEffect(() => {
    console.log('렌더링 Name:' + name);
  }, [name]);

  useEffect(() => {
    console.log('렌더링 Nickname:' + nickName);
  }, [nickName]);

  useEffect(() => {
    console.log('렌더링 name:' + name + ',NickName:' + nickName);
  }, [name, nickName]);

  useEffect(() => {
    console.log('렌더링 return: ' + name);
    return () => {
      console.log('clean up'); //언마운트 처리됬는지 확인할려고
    };
  }, [name]); //[]가 없으면 렌더링 될때마다 수행된다.

  return (
    <div>
      <div>
        <input
          type='text'
          value={name}
          onChange={onChangeName}
          placeholder='name'
        />

        <input
          type='text'
          value={nickName}
          onChange={onChangeNickName}
          placeholder='name'
        />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>

      <div>
        <b>닉네임:</b>
        {nickName}
      </div>
    </div>
  );
};

export default MyuseEffect001;
