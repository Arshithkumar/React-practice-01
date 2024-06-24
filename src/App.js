// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Individual from './components/Individual';

function App() {
  return (
    <>
    {/* <h1>Hello</h1> */}
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='user/:id' element={<Individual />} />
    </Routes>
    </>
  );
}

export default App;
