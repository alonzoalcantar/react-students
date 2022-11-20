export default function Student ({ students }) {
    return (
        <ul>
            {students.map((student, idx) => (
                <li>
                    <h1><strong>{student.name}</strong></h1>
                    <p>{student.bio}</p>

                    <div>
                        <label><strong>Score Information</strong></label>
                    </div>

                </li>
            ))}
        </ul>
    )
}