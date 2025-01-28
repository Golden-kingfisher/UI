import Header from './components/Header.jsx';
import Results from './components/REsults.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';
// import { INITIAL_INVESTMENT,ANNUAL_INVESTMENT,EXPECTED_RETURN,DURATION } from './util/userInputConstants.js';
import * as userInputConstant from './util/userInputConstants.js';


function App() {

  const [userInput, setUserInput] = useState({
    [userInputConstant.INITIAL_INVESTMENT]: 10000,
    [userInputConstant.ANNUAL_INVESTMENT]: 1200,
    [userInputConstant.EXPECTED_RETURN]: 6,
    [userInputConstant.DURATION]: 10
  })

  function handleChange(inputIdentifier, value) {
    console.log(inputIdentifier, value);
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +value
      }
    })
  }

  const isUserInputValid = userInput.duration >= 1;

  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!isUserInputValid && <p className='center'>Please enter a duration greater than Zero</p>}
      {isUserInputValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App
