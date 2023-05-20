import React from 'react'

const Basic = () => {

    const luckyNum = 37;
    const randomNum = Math.floor(Math.random() * 10 + 1)
    
    let element = null;

    if (randomNum === 7) {
        element=<img src="https://media.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif" />
    } else {
        element=<h2>Please try again after sometime</h2>
    }

    return (
        <div>
            <h1>My random number {randomNum}</h1>
            <h2>My Luck Number : {luckyNum}</h2>
            {/* {
                randomNum === 7 ? <img src="https://media.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif" />
                    : <h2>Try again! </h2>
            } */}
            {element}
            {randomNum === 7 && <img src="https://media.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif" />}
      </div>
    )
}

export default Basic;