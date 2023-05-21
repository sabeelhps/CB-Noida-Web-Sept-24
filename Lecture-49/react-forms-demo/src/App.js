import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import useToggle from './hooks/use-toggle';
import GithubProfile from './components/GithubProfile';
import Timer from './components/Timer';

function App() {

  const [isHappy, setIsHappy] = useToggle(true);
  const [isHeartBroken, setIsHeartBroken] = useToggle(false);

  // const toggleIsHappy = () => {
  //   setIsHappy(!isHappy);
  // }

  // const toggleIsHeartBroken = () => {
  //   setIsHeartBroken(!isHeartBroken);
  // }

  return (
    <div className="App">
      
      <GithubProfile/>
      {/* <ShoppingList /> */}
      {/* <h2 onClick={()=>setIsHappy()} style={{fontSize:'80px'}}>{ isHappy ? '😄' : '😢' }</h2>
      <h2 onClick={()=>setIsHeartBroken()} style={{fontSize:'80px'}}>{ isHeartBroken ? '💔' : '❤️‍🩹' }</h2> */}
      <Timer/>
    </div>
  );
}

export default App;
