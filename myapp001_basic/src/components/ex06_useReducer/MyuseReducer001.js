import { useReducer, useState } from 'react';

/*
 useReducer : useState보다 더 다양한 컴포넌트 상황에 따라, 
 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용한다.
 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을
 전달받아 새로운 상태를 변환하는 함수이다.
 리듀서 함수에서 새로운 상태를 만들때는 반드시 불변성을 지켜 주어야 한다.


 reducer : state를 업데이트 해주는 역할
 dispatch : state 업데이트 요청
 action : 요청한 내용


 실행순서
 dispatch(action)=> reducer(state, action){state update} 
*/

//reducer정의
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };

    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

//reduce이용
const MyuseReducer001 = () => {
  //   const [state, setState] = useState(0);

  const [state, dispatch] = useReducer(reducer, { value: 0 }); //{ value: 0 }값이 하나라도 객체로 처리된다.

  return (
    <div>
      <p>현재 카운트 값 : {state.value}</p>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' }); //액션의 타입을 정해준다.
        }}
      >
        UP
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        DOWN
      </button>
    </div>
  );
};

export default MyuseReducer001;
