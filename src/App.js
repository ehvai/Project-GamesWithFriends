import './App.css';
import React,{ useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import GameList from "./GameList"
import PlayerList from "./PlayerList"
import LoginAccount from "./LoginAccount"

function App() {
 const [players, setPlayers] = useState([...STARTING_PLAYER_LIST])



  return (
    <div className = 'App'>
  <h1>Welcome to Games with Friends!</h1>
  <p>Have a seat and let's go on this ride together</p>
  <Header />
  <Login />
  <GameList />
  <IndividualGame />
  <PlayerList />
  <Footer />
  </div>
  );
}

export default App;
