import {Route, Routes} from 'react-router-dom'
import Runnings from './layouts/runnings';
import Home from './pages/home/index';
import Contacts from './pages/contacts/index';
import Projects from './pages/projects/index';
import About from './pages/about';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Runnings/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
  );
}
export default App;
