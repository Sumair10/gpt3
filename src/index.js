import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyBiU7WxJssUH5A3WosY1q_MnYdoeZc236w",
  authDomain: "gpt3-35872.firebaseapp.com",
  projectId: "gpt3-35872",
  storageBucket: "gpt3-35872.appspot.com",
  messagingSenderId: "950778846133",
  appId: "1:950778846133:web:f9694de16f0e32391097fc"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
