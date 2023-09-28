import React,{useRef} from 'react';
import Navbar from './components/Navbar';
import Create from './components/Create'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';
function App() {
  return (
   <>
 
  <Router>
  <Navbar/>
    <Routes>
      <Route exact path='/create' element={<Create/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/edit/:id' element={<Update/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;
