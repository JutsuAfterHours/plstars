import React from "react";

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc w-20 pa2'>
                <img style={{width:200,height:200 }} alt='player_photo' src={`https://robohash.org/${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.club}</p>
            </div>
        </div>
    );
}

export default Card;
