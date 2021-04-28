import React, { useEffect, useState } from 'react';
import actions from '../api';

function AllDestinations(props) {

    const[destinations, setDestinations] = useState([])

    useEffect(() => {
        actions.getAllDestinations.then(res => setDestinations(res.data))
        .catch(console.error)
    }, [])


    return (
        <div>
            <h3> All items </h3>
            <ul>
             {destinations.map(each =>{
                 return (
                     <li key={each._id}>{each.name}</li>
                 )
             })}   
            </ul>
        </div>
    );
}

export default AllDestinations;