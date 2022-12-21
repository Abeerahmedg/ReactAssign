import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonDetails from './PersonDetails';

export function Person(props){
    const person = props.person

    async function DeletePerson(props){
        console.log(props)
        await axios.delete(`https://localhost:7031/api/react/${this.state.id}`)
        .then(result =>result.data)
    }

    return(
        <tr>
            <td>
                <p><Link to={person.id} state={{person: person}}>{person.name}</Link></p>
            </td>
            <td>
                <p>{person.numberOfBooks}</p>
            </td>
            <td>
                <button onClick={()=> DeletePerson(person.id)}>Delete</button>
            </td>
            {/* <td>
                <button onClick={()=> PersonDetails(person.id)}>Details</button>
            </td> */}
        </tr>
    )
}