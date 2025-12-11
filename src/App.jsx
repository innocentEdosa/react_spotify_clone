import { Routes, Route } from 'react-router';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Counter from './component/counter';


function App() {


  return (
    <>
    
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

    </Routes> 
    </>
  )
}


// common hooks in react 
// useState -> store and manage in a function component,
// useEffect,
// useRef, 
// useMemo, 
// useCallback, 
// useContext, 

export default App
