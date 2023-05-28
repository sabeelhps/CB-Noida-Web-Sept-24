import { useState } from 'react';
import './App.css';
import About from './components/About';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Person from './components/Person';
import { Route, Routes, NavLink, Link} from 'react-router-dom';
import FakeProduct from './components/FakeProduct';
import FromBackend from './components/FromBackend';

function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink 
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to="/about">About
              </NavLink>
            </li>
          <li>
            <NavLink 
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to="/dog">Dog
            </NavLink>
          </li>
          <li>
          <NavLink 
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to="/cat">Cat</NavLink>
            </li>
          <li>
            <NavLink 
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to="/person">Person
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
              to="/api/products/23567">Fetch from Backend
            </NavLink>
          </li>
        </ul>
      </nav>  
      <section>
        <Link to="/products/1">1, </Link>
        <Link to="/products/2">2, </Link>
        <Link to="/products/3">3, </Link>
        <Link to="/products/4">4, </Link>
        <Link to="/products/5">5, </Link>
      </section>

      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/dog" element={<Dog/>}/>
        <Route path="/cat" element={<Cat/>}/>
        <Route path="/person" element={<Person />} />
        <Route path="/products/:productId" element={<FakeProduct/>}/>
        <Route path="/api/products/:productId" element={<FromBackend/>}/>
      </Routes>
    </div>
  );
}

export default App;
