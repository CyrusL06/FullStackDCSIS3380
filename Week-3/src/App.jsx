import './App.css'
import {log, PI, obj} from './components/helpers'
import Header from './components/header'
import Footer from './components/footer';
import Player from './components/player';
// import display from './components/helpers' 

//npm run dev
function App() {
        const players = ["VCyrus","player2","player3","player4","player5"]
        log("Hello", new Date());
        console.log(obj.price);
  return (
    <>
    <Header />
    {players.map((player, index) => <Player playerName = {player} key={index} />)}
    <Footer authorName = "Cyrus Lorenzo" course = "CSIS"/>
    </>


  )
}

export default App
