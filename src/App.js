import React from 'react';
import './App.css';
import Form from './Components/BookAppointment/Form';
import Main from './Components/MainPage/Main';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Form />
    </div>
  );
}

export default App;
