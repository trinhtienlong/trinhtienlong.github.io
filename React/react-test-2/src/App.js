import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Brower from './Page/Brower';
import Home from './Page/Home';
import Layout from './Page/Layout';
import Nopage from './Page/Nopage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='brower' element={<Brower />}/>
          <Route path='*' element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
