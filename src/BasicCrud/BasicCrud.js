import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BasicCrud = () => {
    const [dodata1, setDodata1] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                console.log("tododata1---->", response.data);
                setDodata1(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
    }, [])

    const handleinput = (e) => {
        setInput(e.target.value);
    }

    const handleclick = () => {
        axios.post("https://jsonplaceholder.typicode.com/todos", { title: input })
            .then(response => {
                console.log("post------->>>>>>>>", response);
                setDodata1([...dodata1, response.data]);
            })
            
    }
    const handledelete =(id)=>
    {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        setDodata1(dodata1.filter(task=>task.id !==id));
    }

    return (
        <div>
            <h1>Basic Crud</h1>
            <input onChange={handleinput} value={input}></input>
            <button onClick={handleclick}>Add</button>
            {
                dodata1 && dodata1.map(index => (
                    <>
                    <p>key={index.id}
                        {index.title}</p>
                       
                        <button>Update</button>
                        <button onClick={()=>handledelete(index.id)}>Delete</button>          
                    </>
                ))
            }
        </div>
    )
}   

export default BasicCrud;
