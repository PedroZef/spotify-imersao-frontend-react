import React from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Sidebar from './componentes/Sidebar/Sidebar.js';
import Footer from './componentes/Footer/Footer.js';
import Main from './componentes/Main/Main.js';


function App() {
  return (
    <div>
      <h1> Spotify Imersão Front-end React</h1>
      <Sidebar />
      <Header />
      <Main />
      <Footer/>
     
    </div>
  );
}

export default App;