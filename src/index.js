import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTxd4c4m7g6XhZTy2cSG3ne2_llUHwmSc",
  authDomain: "coderreact-6c5de.firebaseapp.com",
  projectId: "coderreact-6c5de",
  storageBucket: "coderreact-6c5de.appspot.com",
  messagingSenderId: "401612599177",
  appId: "1:401612599177:web:095cead83504bf92fdfb58",
  measurementId: "G-42XM0MF466"
};


initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);