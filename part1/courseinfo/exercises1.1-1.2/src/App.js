const Header = (props) => {
  // console.log(props);
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  // console.log(props);
  return (
    <>
      <p>
        {props.course} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  // console.log(props);
  return (
    <>
      <Part course={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part course={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part course={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  let sum = 0;

  props.course.parts.forEach(value => {
    sum += value.exercises;
  })
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
}

export default App;
