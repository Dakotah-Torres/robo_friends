import './card.css'; 
import React from 'react';
import 'tachyons';

//This is the card Element it will contain the robot friends
const Card = ({name , email , id}) => {
    return(
        < div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="Pic" src={`https://robohash.org/${id}?200x200"/`}/> 
            <div>
                <h2>{name}</h2>
                <p> {email}</p>
            </div>
        </div>
    );

}

export default Card;