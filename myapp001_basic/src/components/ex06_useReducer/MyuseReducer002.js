import { useReducer, useState } from 'react';

function reducer(state, action) {
  //state  = { name: '', nickname: '' }을 받고
  switch (
    action.check //action = { check: e.target.name, type: e.target.value } 를 받는다.
  ) {
    case 'name':
      return { name: action.type }; //{}가있으면 key가있고 값이있어야한다
    case 'nickname':
      return { nickname: action.type };
    default:
      return { state }; //{state} = { name: '', nickname: '' }
  }
}

const MyuseReducer002 = () => {
  //   const [name, setName] = useState('');
  //   const [nickname, setNickName] = useState('');

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNickName = (e) => {
  //     setNickName(e.target.value);
  //   };

  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch({ check: e.target.name, type: e.target.value }); //이값은 함수 redecer에서 받는다.
    //action이벤트를 발생시키는 방법은 dispatch 라는 함수에 단순 객체인 action을 넣는 것으로 할 수 있다.
    //dispatch(action) => reducer동작 => store의 state변경 => 변경된 state가 state를 subscription하고 있는 component에 정보전달.
  };
  return (
    <div>
      <div>
        <input
          type='text'
          name='name' //state값으로 사용 useReducer(reducer, { name: '', nickname: '' });여기 name과 같아야함
          placeholder='name'
          //   onChangeName={onChangeName}
          onChange={onChange}
        />
        <input
          type='text'
          name='nickname'
          placeholder='nickname'
          //   onChangeName={onChangeNickName}
          onChange={onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};
export default MyuseReducer002;
