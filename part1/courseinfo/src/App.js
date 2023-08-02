const Header = (props) => {
  console.log(props)

  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log(props)

  return (
    <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {

  return (
    <div>
      <Header course="Half Stack application development"/>
      <Content 
      part1 = "Fundamentals of React"
      part2 ="Using props to pass data"
      part3 ="State of a component"
      exercises1 = {10}
      exercises2 = {7}
      exercises3 = {14}
      />
      <Total 
      exercises1 = {10}
      exercises2 = {7}
      exercises3 = {14}/>
    </div>
  )
}

export default App