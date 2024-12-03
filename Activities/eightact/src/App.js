import React, { useState } from "react";

const Addition = () => {
  // State variables to hold the values of the two inputs and the sum
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState(null);

  // Function to handle addition
  const handleAddition = () => {
    // Convert inputs to numbers and calculate the sum
    const total = parseFloat(firstNumber) + parseFloat(secondNumber);
    setSum(total);
  };

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <div>
        <input
          type="text"
          placeholder="First number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
      </div>
      {sum !== null && (
        <div>
          <h2>Result: {sum}</h2>
        </div>
      )}
    </div>
  );
};

export default Addition;
