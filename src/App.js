import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enabled", "success")
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode} />  
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>  
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App;
