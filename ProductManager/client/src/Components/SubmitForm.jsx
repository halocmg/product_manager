import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
const SubmitForm = () => {
    const navigate = useNavigate()
    const [pirateName, setPirateName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("Captain");
    const [leg, setLeg] = useState(true);
    const [eye, setEye] = useState(true);
    const [hand, setHand] = useState(true);
    const [chests, setChest] = useState();
    const [errors, setErrors] = useState([]);
    const [pirate, setPirate] = useState([])

    const newPirate = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirates/new", { pirateName, imgUrl, chests, phrase, position, leg, eye, hand })
            .then(res => {
                console.log("Client Success")
                console.log(res.data)
                navigate("/pirates")
            })
            .catch(err => {
                console.log("Client Error")
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    const mainBoard = () => {
        navigate("/pirates")
    }
    return (
        <div className='header'>

        <button onClick={() => mainBoard()}>Crew Board</button>
            <h1>Submit Form</h1>
        <div className='display'>
            <p>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
            </p>

            <form onSubmit={newPirate}>
                <div>
                    <label htmlFor="pirateName">Pirate Name: </label>
                    <input type='text' onChange={(e) => setPirateName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="imgUrl">Image Url: </label>
                    <input type='text' onChange={(e) => setImgUrl(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="chests"># of Chests: </label>
                    <input type='number' onChange={(e) => setChest(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phrase">Phrase: </label>
                    <input type='text' onChange={(e) => setPhrase(e.target.value)} />
                </div>
                <select name="search" id="search" onChange={(e) => setPosition(e.target.value)}>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
                <div>
                    <label htmlFor="leg">Peg Leg: </label>
                    <input type="checkbox" onChange={e => setLeg(e.target.checked)} checked={leg} />
                </div>
                <div>
                    <label htmlFor="eye">Eye Patch: </label>
                    <input type="checkbox" onChange={e => setEye(e.target.checked)} checked={eye} />
                </div>
                <div>
                    <label htmlFor="hand">Hook Hand: </label>
                    <input type="checkbox" onChange={e => setHand(e.target.checked)} checked={hand} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
    )
}

export default SubmitForm