export default function MortageCalculator() {
  return (
    <div>
      <div id="left">
        <h1>Mortgage Calculator</h1>
        <span>Clear All</span>

        <label>Mortgage Amount</label>

        <label>Mortgage Term</label>

        <label>Interest Rate</label>

        <div>
          <label htmlFor="radio-group">Mortgage Type</label>
          <div id="radio-group" className="radio-group">
            <input
              type="radio"
              id="repayment"
              name="mortgage-type"
              defaultValue="repayment"
            />
            <label htmlFor="repayment">Repayment</label>
            <input
              type="radio"
              id="interest-only"
              name="mortgage-type"
              defaultValue="interest-only"
            />
            <label htmlFor="interest-only">Interest Only</label>
          </div>
        </div>

        <button>Calculate Repayments</button>
      </div>

      {/* <!-- Empty results start --> */}

      <h2>Results shown here</h2>

      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>

      {/* <!-- Empty results end -->

<!-- Completed results start --> */}

      <h2>Your results</h2>

      <p>
        {" "}
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <h3>Your monthly repayments</h3>

      <h3>Total you'll repay over the term</h3>

      {/* <!-- Completed results end --> */}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Kliner Tomas</a>.
      </div>
    </div>
  );
}
