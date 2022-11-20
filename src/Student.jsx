import Score from "./Score";

export default function Student ({ students }) {
    return (
        <ul>
            {students.map((student, idx) => (


                <li>
                    <h1>{student.name}</h1>
                    <p>{student.bio}</p>

                    <div>
                        <h3>Score Information</h3>
                        <Score 
                        student= {student}
                        idx={idx} />
                    </div>

                </li>


            ))}
        </ul>
    )
}