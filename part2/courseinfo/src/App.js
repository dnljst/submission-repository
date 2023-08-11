import Course from './components/Course'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const total = course.parts.reduce((accumulator, parts) => {
    return accumulator + parts.exercises
  }, 0)
  
  return (
    <div>
      <Course course={course} />
      <p>total of {total} exercises</p>
    </div>
  )
}

export default App