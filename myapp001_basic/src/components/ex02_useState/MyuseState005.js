import { useState } from 'react';

const MyuseState005 = () => {
  const [customerList, setCustomerList] = useState([
    {
      name: '박보검',
      address: '서울시 강남구',
      phone: '010-000-0000',
    },
    {
      name: '송중기',
      address: '서울시 서초구',
      phone: '010-111-1111',
    },
    {
      name: '송혜교',
      address: '서울시 개포구',
      phone: '010-222-2222',
    },
  ]);

  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phone: '',
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
    setCustomerList([...customerList, customer]);
    setCustomer({ name: '', address: '', phone: '' });
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
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전번</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((element, idx) => {
            return (
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyuseState005;
