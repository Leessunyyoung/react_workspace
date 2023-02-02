/*
props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며,
컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
state는 컴포넌트 내부에서 바뀔수 있는 값을 의미한다.
*/

//name을 app.js 에서 넘겨준다
const Myprops001 = ({ name }) => {
  //부모가 넘겨주는값을 받을때는 {name}처럼 받아준다.
  //자식이 부모의값을 변경못한다.읽기전용으로만 사용가능.

  return (
    <div>
      <h3>props:properties</h3>
      <p>hello,{name}</p>
    </div>
  );
};

export default Myprops001;
