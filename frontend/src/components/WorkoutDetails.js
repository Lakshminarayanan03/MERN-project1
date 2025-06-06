const WorkoutDetails = ({ workout }) => {
    return ( 
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kgs): </strong>{workout.loads}</p>
            <p>Reps: {workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
     );
}
 
export default WorkoutDetails;