import './App.css';
import React,{ useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import GameList from "./GameList"
import PlayerList from "./PlayerList"
import STARTING_PLAYER_LIST from "./StartingPlayerList"
import LoginAccount from "./LoginAccount"
import STARTING_GAME_LIST from "./StartingGameList"

function App() {
 const [players, setPlayers] = useState([...STARTING_PLAYER_LIST])
 const [gameList, setGameList] = useState([...STARTING_GAME_LIST])

function createAccount(newAccount){
  setPlayers([...players,newAccount])
}

function addGame(newGame){
  setGameList([...gameList,newGame])
}


  return (
    <div className = 'App'>
  <h1>Welcome to Games with Friends!</h1>
  <p>Have a seat and let's go on this ride together</p>
  <Header />
  <LoginAccount createAccount={createAccount} players={players}/>
  <GameList addGame={addGame} gameList={gameList} players={players}/>
  <PlayerList players={players}/>
  <Footer />
  </div>
  );
}

export default App;
