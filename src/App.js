import React, { useState } from 'react';
import './App.css';
import Form from './Components/BookAppointment/Form';
import Main from './Components/MainPage/Main';
import Navbar from './Components/Navbar/Navbar';
import Table from './Components/Table/Table'
function App() {
  const [appo, setAppo] = useState([])
  const handleAddAppo = (data) => {
    setAppo((prev) => {
      return [...prev, data]

    })

  }
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Form handleAdd={(data) => handleAddAppo(data)} />
      <Table data={appo} />
    </div>
  );
}

export default App;
