import { useState } from 'react';

const MyBasic004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  const handleName = (e) => {
    // setCustomer(this.value); ->readOnly
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
      //  prevState ->기존에있는값 위에 name address phone
      //name에속성에있는 값을 e.target.value로 바꿔라~
    });
  };
  const handleAddress = (e) => {
    setCustomer({ ...customer, address: e.target.value });
  };
  const handlePhone = (e) => {
    setCustomer({ ...customer, phone: e.target.value });
  };

  const handleCommit = (e) => {
    console.log(`${customer.name} ${customer.address} ${customer.phone}`);
  };
  return (
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handleName} />
        {/* 가지고오는건 value 넣을려면 이벤트를 넣어줘야함 */}
      </p>
      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>
      <p>
        <span>핸드폰번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>
      <button onClick={handleCommit}>확인</button>
    </div>
  );
};

export default MyBasic004;
