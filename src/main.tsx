import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './index.css';
import App from './App.tsx';
import Messages from './Messages/Messages.tsx';
import Profile from './Profile/Profile.tsx';
import SignInSignUp from './Login/SignInSignUp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<SignInSignUp />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
