export default function Score ({student}) {
    return(
        <div>
        {student.scores.map((student, idx) => (
            <div>
                <label>Date: </label>
                <p>{student.date}</p>
                <label>Score:</label>
                <p>{student.score}</p>
                <hr></hr>
            </div>
        ))}
        </div>
    )
}