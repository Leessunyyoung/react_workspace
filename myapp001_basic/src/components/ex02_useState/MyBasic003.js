import { useState } from 'react';

const MyBasic003 = () => {
  const [names, setNames] = useState(['고수', '박보검', '송중기']);
  const [input, setInput] = useState('');
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    // setNames(input); ->const [names, setNames] = useState(['고수', '박보검', '송중기']); 애는 배열이고 setNames는 string값이라 안된다
    setNames([input, ...names]); //...names는 append와 같다
    setInput('');
  };
  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      {/* e.target.value에서 value는 여기있는 value다 const[input,setInput]에서 input과 동일하게 써줘야한다. */}
      <button onClick={handleClick}>ADD</button>
      {/* return을 해줄려면 중괄호를 써야한다.소괄호로 할려면
            {names.map((value, index) => (
             <p key={index}>{value}</p>;
      ))}
       */}
      {names.map((value, index) => {
        return <p key={index}>{value}</p>;
        // 리액트는 이전의 돔과 비교해서 다른 점을 렌더링해주는 특징
        // key값은 변하는 요소이면 써주는게 좋다.
      })}
    </div>
  );
};

export default MyBasic003;
