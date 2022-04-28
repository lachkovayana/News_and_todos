import './App.css';
import React from 'react';
import NavbarComp from './Components/NavbarComp';
import FooterComp from './Components/FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {

  return (
    <div className="h-100 d-flex flex-column page_body">
      <NavbarComp />
      <FooterComp />
    </div>
  );
}
export default App;
