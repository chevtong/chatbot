import React, { useEffect, useState } from 'react'

function Jokecomponent() {

    const [jokeData, setJokeData] = useState([])

    const getJoke = async () => {
        const respon = await fetch(
            'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
        );
        const data = await respon.json();
        setJokeData(data)
    }

    useEffect(() => {
        getJoke()
    }, [])

    return (
        <div >
            {jokeData.joke === undefined ? (
                <p>Let me think...</p>
            ) : (
                <div className="joke-container">
                <p>{jokeData.joke}</p>
                <button className="joke-next-button" onClick={()=>getJoke()}>Next one</button>
                </div>
            )}
        </div>
    )
}

export default Jokecomponent


