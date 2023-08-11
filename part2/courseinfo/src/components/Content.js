const Content = ({ course }) => {
    return (
    <>
    {course.parts.map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}
    </>
    )
}

export default Content