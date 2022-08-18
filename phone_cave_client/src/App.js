import './App.css';
import PhoneDetails from './components/PhoneDetails';
import Phones from './components/Phones';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Phones />}></Route>
          <Route path='/phones' element={<Phones />}></Route>
          <Route path='/phones/:phoneId' element={<PhoneDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
