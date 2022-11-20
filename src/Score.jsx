export default function Score ({student}) {
    return(
        <div>
        {student.scores.map((student, idx) => (


            <div>
                <strong><label>Date: </label></strong>
                <p>{student.date}</p>
                <strong><label>Score:</label></strong>
                <p>{student.score}</p>
                <hr></hr>
            </div>


        ))}
        </div>
    )
}