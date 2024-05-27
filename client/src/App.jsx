import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx'
import { UserContextProvider } from './UserContext'
import ProfilePage from './pages/ProfilePage'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<ProfilePage />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
