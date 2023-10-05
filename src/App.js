import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import SignUp from './Pages/SignUp';
import Verfication from './Pages/Verification';
import AgentRegistration from './Pages/AgentRegistration';
import Profile from './Pages/Profile';
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/Agent' element={<AgentRegistration />} />
        <Route exact path='/verification' element={<Verfication />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/reset-password' element={<ResetPassword />} />
        <Route exact path='/profile' element={<Profile
         />} />
         <Route exact path='/details' element={<Details
         />} />
      </Routes>
    </div>
  );
}

export default App;       