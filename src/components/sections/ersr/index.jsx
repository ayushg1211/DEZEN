import React from 'react'
import styles from "./Ersr.module.css"
import Summary from '../../subsections/summary'
import EmployeeIdReport from '../../subsections/employeeidreport'
import { PieCharts } from '../../subsections/piecharts'
import { VerticalChart } from '../../subsections/verticalchart'
import { BarCharts } from '../../subsections/barcharts'

const Ersr = () => {
  return (
    <section className={styles.ersrCont}>
        <figure><img src="/images/image39.png" alt="" /></figure>
        <h3>Employee Residency Status Report</h3>
        <p>This report provides the residency (Iqama) status of employees, including expiry dates, issuance dates, and renewal status for the month of <span>March.</span></p>

        <Summary/>
        <EmployeeIdReport/>
        <section className={styles.chartCont}>
          <div className={styles.charts}>
            <div>
              <h3>Iqama Status Distribution</h3>
              <PieCharts/>
            </div>
            <div>
              <h3>Remaining days for Iqama expiry</h3>
               <VerticalChart/>
            </div>
          </div>

          <div className={styles.bottom}>
                      <div className={styles.chart}>
            <h3>Iqama Expiry Timeline</h3>
          <BarCharts/>
          </div>
          </div>

        </section>
    </section>
  )
}

export default Ersr