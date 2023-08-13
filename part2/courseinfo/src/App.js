import Course from "./components/Course"
import courses from "./index.js"

const App = () => {
  return ( 
  <div>
    <h1>Web development curriculum</h1>
    <Course course={courses} />
  </div>
  )
}

export default App