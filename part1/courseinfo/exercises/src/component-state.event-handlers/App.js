/* INTRODUCTION TO COMPONENT STATE AND EVENT HANDLERS */

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = "Peter";
//   const age = 10;
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </>
//   )
// }

import { useState } from 'react';

const Display = ({ counter }) => {
  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

/* COUNTER FUNCTION */
const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text="plus"
      />
      <Button
        handleClick={reset}
        text="reset"
      />
      <Button
        handleClick={decreaseByOne}
        text="minus"
      />

    </div>
  )
}

export default App;