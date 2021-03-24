import React, { useState } from "react";
import TableDetails from "./TableDetails";

function App() {
  const [pAmount, setpAmount] = useState(100000);
  const [interest, setinterest] = useState(8);
  const [duration, setduration] = useState(54); //in months

  const intr = interest / 100 / 12;

  const emi = duration
    ? Math.round((pAmount * intr) / (1 - Math.pow(1 / (1 + intr), duration)))
    : 0;

  const totalAmount = duration * emi;

  var totalAmountOfCredit = Math.round(
    (emi / intr) * (1 - Math.pow(1 + intr, -duration))
  );
  
  const totalAmountOfInterest = Math.round(totalAmount - totalAmountOfCredit);

  return (
    <>
      <div className="calculator-app">
        <h2 className="calculator-heading">Loan Calculator</h2>
        <div className="loan-amount">
          <label for="loan-amount">Loan Amount: </label>

          <input
            type="number"
            value={pAmount}
            onChange={(event) => {
              setpAmount(event.target.input);
            }}
            defaultValue={pAmount}
            name="calculator-name"
          />
        </div>
        <div className="loan-amount">
          <label for="interest">Interest Rate: </label>

          <input
            type="number"
            value={interest}
            onChange={(event) => {
              setinterest(event.target.value);
            }}
            defaultValue={interest}
            name="calculator-name"
          />
        </div>
        <div className="loan-amount">
          <label for="duration">Duration in Months: </label>
          <input
            type="number"
            value={duration}
            onChange={(event) => {
              setduration(event.target.value);
            }}
            defaultValue={duration}
            name="calculator-name"
          />
        </div>

        <TableDetails
          pAmount={pAmount}
          interest={interest}
          duration={duration}
          emi={emi}
          totalAmountOfInterest={totalAmountOfInterest}
          totalAmount={totalAmount}
        />
      </div>
    </>
  );
}

export default App;
