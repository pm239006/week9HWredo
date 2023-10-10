import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from '@mui/material/styles';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth'; 


import { Home, Auth, Cart, Shop } from './components/sharedComponent'; 
import { theme } from './Theme/themes';
import { firebaseConfig } from './firebaseConfig'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme = {theme}>
      <Router>
        <Routes>
          <Route path='/' element = {<Home title = {'Car Dealership'}/>} />
          <Route path='/auth' element = {<Auth title={''}/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/shop' element = {<Shop/>} />
        </Routes>
      </Router>
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
)
