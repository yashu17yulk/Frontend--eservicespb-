import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Eservices from './Eservices/Eservices';
import reportWebVitals from './reportWebVitals';

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
    <> 
    <BrowserRouter>  
   
<App />

  
    </BrowserRouter>
    </>,
  document.getElementById('root')
);

reportWebVitals();
