import React, { useState } from 'react';
import axios from 'axios'
function AddDestination(props) {
    const [destination, setDestination] = useState('')

    const handleSubmit =(e)=>{
        
        //send it to the server
        e.preventDefault()
        axios.post('http//localhost:5000/addDestination', {destination})
            .then(console.log)
            .catch(console.error)

    }
    const handleChange =(e)=>{setDestination(e.target.value) }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="destination" placeholder="Add a destination ..."/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddDestination;