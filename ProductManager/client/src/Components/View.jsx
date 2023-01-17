import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate} from 'react-router-dom';
export default (props) => {
    
    const [pirates, setPirates] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" +id)
        .then(res => setPirates(res.data))
    }, []);
    const mainBoard = () => {
    navigate("/pirates")
}
    return (

        <div className='header'>
    <button onClick={() => mainBoard()}>Crew Board</button>
            <h1>{pirates.pirateName}</h1>
            <div className='display'>

            <h3>"{pirates.phrase}"</h3>
            <img src={pirates.imgUrl}/>
            <h3># of Chests: {pirates.chests}</h3>
            <h3>Position: {pirates.position}</h3>
            <h3>Peg Leg: {JSON.stringify(pirates.leg)}</h3>
            <h3>Eye Patch: {JSON.stringify(pirates.eye)}</h3>
            <h3>Hook Hand: {JSON.stringify(pirates.hand)}</h3>

            </div>
        </div>
        )
}