import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll =()=> {
    const request = axios.get(url)
    /*const doesNotExist = {
        name: "Non Existing human",
        number: 666-666-666,
        id: 666
    }
    return request.then( response => { return response.data.concat(doesNotExist) } )*/
    return request.then( response => { return response.data })
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

const update =(newPerson, id)=>{
        const request = axios.put(`${url}/${id}`, newPerson)
        return request.then( response => response.data )
}

export default{ getAll, create, deletePerson, update}