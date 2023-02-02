import { Route, Routes } from 'react-router-dom';
import About from './components1/About';
import Dashboard from './components1/Dashboard';
import Home from './components1/Home';
import Layout from './components1/Layout';
import NoMatch from './components1/NoMatch';

//npm install react-router-dom
const App = () => {
  return (
    <div>
      <h1>Basic Example</h1>
      {/*
       <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>

            */}
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* 인덱스 경로!! /로 하면 안된다. */}
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
