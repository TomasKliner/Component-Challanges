import "./variables.css";
import styles from "./styles.module.css";
export default function MortageCalculator() {
  return (
    <div className={styles.body}>
      <div className={styles.first}>
        <h1 className={styles.h1}>Mortgage Calculator</h1>
        <div className={styles.clear}>Clear All</div>

        <section className={styles.section}>
          <label className={styles.label} htmlFor="mortage">
            Mortgage Amount
          </label>
          <input
            id="mortage"
            className={styles.input}
            type="text"
            placeholder=""
          />
        </section>
        <section className={styles.section}>
          <label className={styles.label} htmlFor="term">
            Mortgage Term
          </label>
          <input
            id="term"
            className={styles.input}
            type="text"
            placeholder=""
          />
        </section>
        <section className={styles.section}>
          <label className={styles.label} htmlFor="interest">
            Interest Rate
          </label>
          <input
            id="interest"
            className={styles.input}
            type="text"
            placeholder=""
          />
        </section>

        <section className={styles.section}>
          <label className={styles.label} htmlFor="radio-group">
            Mortgage Type
          </label>
          <div id="radio-group" className={styles.section}>
            <div className={styles.mortageType}>
              <input
                type="radio"
                id="repayment"
                name="mortgage-type"
                defaultValue="repayment"
              />
              <label className={styles.label} htmlFor="repayment">
                Repayment
              </label>
            </div>
            <div className={styles.mortageType}>
              <input
                type="radio"
                id="interest-only"
                name="mortgage-type"
                defaultValue="interest-only"
              />
              <label className={styles.label} htmlFor="interest-only">
                Interest Only
              </label>
            </div>
          </div>
        </section>

        <button className={styles.submit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          <span>Calculate Repayments</span>
        </button>
      </div>

      {/* <!-- Empty results start --> */}

      <h2>Results shown here</h2>

      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>

      {/* <!-- Empty results end -->*/}

      {/*<!-- Completed results start --> */}

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
        <span>
          . Coded by <a href="https://kliner.eu">Kliner Tomas</a>.
        </span>
      </div>
    </div>
  );
}
