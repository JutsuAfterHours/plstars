import React from "react";
import Card from "./card"


const CardList = ({players}) => {
    const cardArray = players.map((user,i) => {
        return <Card 
        key={i} 
        age={players[i].age} 
        name={players[i].name} 
        club={players[i].club} 
        id={players[i].id}/>
    });
    return(
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;
