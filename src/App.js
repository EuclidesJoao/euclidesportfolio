import {Route, Routes} from 'react-router-dom'
import Runnings from './layouts/runnings';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Runnings/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
  );
}
export default App;
