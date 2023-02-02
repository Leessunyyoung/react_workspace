const MyBasic001 = () => {
  let cnt = 0;
  let color = 'black';
  const handleClick = () => {
    cnt = cnt + 1;
    console.log(`cnt:${cnt}`);
  };
  return (
    <div>
      <p>
        {/* state를 사용하면 랜더링이 발생한다. html에서 cnt는 0으로 변수선언해둔 그대로 출력된다. */}
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyBasic001;
