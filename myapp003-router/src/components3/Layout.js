import { NavLink, Outlet } from 'react-router-dom';

const style = { color: 'green', fontsize: '20px' };

const activeStyle = ({ isActive }) => ({
  color: isActive ? 'green' : '',
  fontsize: isActive ? '2rem' : '',
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* a href랑 같은내용이다 path에 해당된다  */}
            <NavLink to='/' style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' style={activeStyle}>
              Dashboard
            </NavLink>
            {/*a 경로로이용하면 전체를 모두 렌더링하므로 <Link> 또는 <NavLink>을 사용한다. */}
            {/* <a href='/dashboard'>Dashboard</a> */}
          </li>
          <li>
            <NavLink to='/nothing-here' style={activeStyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
      {/* 같은패스로 설정되어있는 엘리먼트들의 값을 출력할 수 있는 공간 */}
    </div>
  );
};

export default Layout;
