import axios from 'axios'

const actions ={
    getAllDestinations: async () => {
        return await axios.get('http://localhost:5000/api/AllDestinations')
    },

    addItem: async (destination) => {
        return await axios.post('http//localhost:5000/api/addDestination', {destination})
    }
}

export default actions