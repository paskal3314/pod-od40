import React from 'react';
import './App.css';

import Header from './components/Header';
import Introduce from './components/Introduce';
import Agenda from './components/Agenda';
import Location from './components/Location';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Introduce />
      <Agenda />
      <Location />
      <Registration />
      <Footer />
    </div>
  );
}
export default App;

