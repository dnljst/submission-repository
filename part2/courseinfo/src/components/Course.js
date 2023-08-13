import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({ course }) => {

    return (
        <>
            {course.map(course =>
                <div key={course.id}>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total course={course} />
                </div>    
            )}
        </>
    )
}

export default Course