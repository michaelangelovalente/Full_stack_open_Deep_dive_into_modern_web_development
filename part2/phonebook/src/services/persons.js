import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll =()=> {
    const request = axios.get(url)
    return request.then( response => { return response.data } )
}


// used to create data for a new Person object
const create =(newPerson)=> {
    const request = axios.post(url, newPerson)
    return request.then( response => response.data)
}

const deletePerson =(id)=>{
    const request = axios.delete(`${url}/${id}`)
    return request.then( response => response.data)
}


export default{ getAll, create, deletePerson}