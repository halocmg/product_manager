import { Link, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Edit from './Components/Edit';
import Main from './Components/Main';
import SubmitForm from './Components/SubmitForm'
import View from './Components/View';
function App() {
  const navigate = useNavigate()
  
  
  return (
    <div className='App'>
      <Routes>
        <Route path="/pirates" element={<Main/>}/>
        <Route path="/pirate/new" element={<SubmitForm/>}/>
        <Route path="/pirate/:id" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
