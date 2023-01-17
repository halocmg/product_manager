import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default () => {
    const navigate = useNavigate()

    const [pirates, setPirates] = useState([])
    const viewFunction = (id) => {
        navigate("/pirate/" + id)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
    }, []);

    const deletePirate = (id) => {
        axios.delete("http://localhost:8000/api/pirates/delete/" + id)
            .then(res => {
                console.log("Deleted " + res.data)

                setPirates(pirates.filter((pirate) => pirate._id !== id))
            })

            .catch(err => console.log(err))
    }

    const newPirate = () => {
        navigate("/pirate/new")
    }
    return (
        <div className="header">
            <button onClick={() => newPirate()}>Create Pirate</button>
            <h1>Pirate Crew</h1>
            <div className="display">

            {pirates.map((pirate, i) => {
                return (
                    <div>
                        <p>{pirate.pirateName}</p>
                        <img src={pirate.imgUrl}></img>
                        <button onClick={() => viewFunction(pirate._id)}>View Pirate</button>
                        <button onClick={() => deletePirate(pirate._id)}>Walk the Plank</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

