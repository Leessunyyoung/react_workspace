import "./MyuseContext01.css";
import React, { useState } from "react";
import Left1 from "./Left1";
import Right1 from "./Right1";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";

const MyuseContext01 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("홍길동");

  const onHandleIncrease = () => {
    setNumber(number + 1);
  };

  const onHandleName = () => {
    setName(name === "홍길동" ? "여진구" : "홍길동");
  };
  return (
    <div id="page">
      <h1>Page</h1>
      <div className="grid">
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          {/* 이 위치에서는 UserContext에 저장돼있는 자원을 다 쓸 수 있음 */}
          <ThemeContext.Provider
            value={{ number, setNumber, onHandleIncrease }}
          >
            {/* 이 위치에서는 UserContext, ThemeContext에 저장돼있는 자원을 다 쓸 수 있음 */}
            <Left1 />
            <Right1 />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01;
