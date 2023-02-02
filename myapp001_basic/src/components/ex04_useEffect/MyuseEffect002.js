import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;

  const [num, setNum] = useState(0);

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  const handleName = (e) => {
    // setNum(e.target.value + 1); 11
    // setNum(parseInt(e.target.value) + 1); 12
    setNum(num + 1); //랜더링 발생할 필요가 없다
  };

  useEffect(() => {
    console.log('data:' + data); //data - 랜더링이 발생되지않아 안되고 num은된다.
  }, [data]); //[data] ->data가 변경되면 실행하게해라 []와 같은의미다(일반 변수를 넣으면).

  useEffect(() => {
    console.log('num:' + num); // num state이기 때문에 랜더링이된다 그래서 콘솔이 찍힌다.
  }, [num]);

  return (
    <div>
      <input type='text' placeholder='data' onChange={handleData} />
      <input type='text' placeholder='num' onChange={handleName} />
      <button>등록</button>
    </div>
  );
};
export default MyuseEffect002;
