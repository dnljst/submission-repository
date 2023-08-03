const Header = (props) => {
  console.log(props)

  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
 
  return (
    <>
      <Part part="Fundamentals of React" exercise= {10}/>
      <Part part="Using props to pass data" exercise= {7}/>
      <Part part="State of a component" exercise= {14}/>
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
      <Content />
      <Total 
      exercises1 = {10}
      exercises2 = {7}
      exercises3 = {14}/>
    </div>
  )
}

export default App