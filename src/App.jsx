import { useState } from 'react'
import './App.css'

function App() {
  const target = 33;

  // array with a match (sorted)
  // const arr = [1, 2, 5, 7, 11, 15, 19, 22, 23, 25, 30, 35, 38, 42];

  // array without a match 
  const arr = [1, 2, 5, 7, 11, 15, 19, 21, 23, 25, 30, 35, 42]
  const [leftPointer, setLeftPointer] = useState(0)
  const [rightPointer, setRightPointer] = useState(arr.length -1)
  const [ currentSum, setCurrentSum ] = useState(arr[leftPointer] + arr[rightPointer])

  const handleClick = () => {
      const sum = arr[leftPointer] + arr[rightPointer];
      if (sum === target) {
        return;
      }  else if (currentSum < target) {
        const newSum = arr[leftPointer + 1] + arr[rightPointer]
        setCurrentSum(newSum)
        setLeftPointer(leftPointer + 1)
      } else {
        const newSum = arr[leftPointer] + arr[rightPointer - 1]
        setCurrentSum(newSum)
        setRightPointer(rightPointer - 1)
      }
    }

const getTextColor = () => {
  if (leftPointer >= rightPointer) {
    return "red";
  }
  return currentSum === target ? "green" : "black";
};



  return (
      <div className="app-container">
      <button onClick={handleClick}>Click to Continue</button>
      <div className="array-container">
        {arr.map((number, numberIndex) => {

          let className = "number"

        if (leftPointer >= rightPointer) { 
          className += " not-found"
         } else if (numberIndex === leftPointer || numberIndex === rightPointer) {
            className += " active"
         }


          return (
              <div
                  className={className}
                  key={numberIndex}
                  style={{
                    height: `40px`,
                    width: `40px`,
                    border: `1px solid black`
                  }}
              >
                {number}
              </div>
          )
        })}
        </div>
        <div style={{color: getTextColor()}}>Current Sum: {currentSum}</div>
        <div>Target:{target}</div>
      </div>
  )
}

export default App
