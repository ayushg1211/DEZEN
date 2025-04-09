import React from 'react'
import styles from "./Summary2.module.css" ;

const Summary2 = () => {
  return (
    <section className={styles.summary}>
      <h4>Summary</h4>
      <ul className={styles.summaryList}>
        <li>Ahmed Ali currently holds an active Iqama that was issued on 2013-06-15 and will remain valid until 2025-06-15. Since the expiry date is still far off, no renewal is required at this time.</li>
        <li>Fatima Khan’s Iqama is set to expire soon on 2024-11-20. It was issued on 2022-12-20, and since the expiration date is approaching, renewal is required to ensure continued validity.</li>
        <li>Saeed Omar’s Iqama has already expired as of 2023-11-10. His Iqama was issued on 2017-12-10, but since it is no longer valid, renewal is necessary to comply with regulations.</li>
        <li>Out of the three employees, two require immediate renewal to prevent legal and administrative complications, while one remains compliant for now.</li>
      </ul>
      <div className={styles.para}>
         <p>The Employee Residency Status Report is a crucial document for ensuring compliance with Saudi labor laws and immigration regulations</p>
      <p>The primary purpose of this report is to track and verify the residency status of all employees working in Saudi Arabia. It ensures that all employees hold valid residency permits (Iqama)</p>

      </div>
     
      {/* <div > */}
        <ol className={styles.finalSum}>
          <li className={styles.listHead}>
            <h3>Key Compliance Aspects Reviewed</h3>
            <ul>
              <li><span>Iqama Validity:</span> Confirmation of valid 	residency permits for all foreign employees.</li>
              <li><span>Iqama Expiry Dates:</span> Identification of upcoming expirations to prompt timely renewal.</li>
            </ul>
          </li>
          <li className={styles.listHead}>
          <h3>Findings and Observations</h3>
            <ul>
              <li><span>Valid Iqama Holders:</span> A majority of employees have up-to-date Iqamas.</li>
              <li> <span>Expiring Iqamas:</span> A percentage of employees have Iqamas nearing expiration, requiring renewal within 30-60 days.</li>
            </ul>
          </li>
          <li className={styles.listHead}>
          <h3>Risk and Complications</h3>
            <ul>
              <li><span>Non-Renewal of Iqama:</span> Employees with expired Iqamas could face legal action, fines, or deportation.</li>
            </ul>
          </li>
        </ol>
      {/* </div> */}
    </section>
  )
}

export default Summary2