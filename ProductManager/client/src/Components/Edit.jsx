import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, useParams, Navigate } from 'react-router-dom';

const Edit = (props) => {
    const { id } = useParams()
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDesc(res.data.desc)
            })
            .catch(err => console.log(err))
    }, [id])

    const editProduct = (e) => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/products/update/" + id, { title, price, desc })
            .then(res => {
                console.log("Client Success")
                console.log(res.data)
                navigate("/")
            })
            .catch(err => {
                console.log("Client Error")
                console.log(err)
            })
    }

    return (
        <div>
            <h2>Edit Form</h2>
            <form onSubmit={editProduct}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <input type='text' onChange={(e) => setDesc(e.target.value)} value={desc} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default Edit
