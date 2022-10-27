import React, {Component} from "react";
import CardList from "../components/CardList";
import { players } from "../players";
import SearchBar from '../components/SearchBar';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            players: players,
            searchfield : ''
        }
    }

    // Every time seachchange event is triggered the onSearchChange function is called
    // searchChange function is the prop
    //event.target.value gives us the event of the search job
    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})     // To update state
    }

    render() {
        const filteredPlayers = this.state.players.filter(player => {
            return player.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        console.log(filteredPlayers);
        return(
            <div className='tc'>
                <h1 className='tc-l f1'>PREMIER LEAGUE STARS</h1>
                <SearchBar searchChange={this.onSearchChange}/>
                {/*Using props.children we can create components that wrap other components*/}
                <Scroll>   
                    <ErrorBoundary>
                        <CardList players={filteredPlayers}/>
                    </ErrorBoundary> 
                </Scroll>
            </div>
        );
    }
}

export default App;