import { useState } from "react";

const Workoutform = () => {

const [title, setTitle] = useState('')
const [loads, setLoads] = useState('')
const [reps, setReps] = useState('')
const [error, setError] = useState(null);

const handleSubmit = async (e) =>{
    e.preventDefault()

    const workout = {title, loads, reps}

    const response = await fetch('api/workouts',{
        method: 'POST',
        body: JSON.stringify(workout),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setTitle('')
        setLoads('')
        setReps('')
        setError(null)
        console.log('new workout added',json)
    }
}

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new workout</h3>
            <label>Exercise title: </label>
            <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
             />
              <label>Loads (in kgs): </label>
            <input 
            type="number"
            onChange={(e) => setLoads(e.target.value)}
            value={loads}
             />
              <label>Reps: </label>
            <input 
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
             />
             <button>Add workout</button>
        </form>
     );
}
 
export default Workoutform;