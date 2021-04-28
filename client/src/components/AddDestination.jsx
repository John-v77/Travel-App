import React, { useState } from 'react';
import actions from '../api';


function AddDestination(props) {

    const [destination, setDestination] = useState('')

    const handleSubmit =(e)=>{
        //send it to the server
        e.preventDefault()

        // *** moved to api.js
        // axios.post('http//localhost:5000/api/addDestination', {destination})
        //     .then(console.log)
        //     .catch(console.error)
        actions.addItem(destination)
                .then(res => {
                    console.log('new Destination:', res)
                    // console.log(props)  search for props.history
                    props.history.push(`addDestination`)
                })
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