import React from 'react'
import styles from "./EmployeeIdReport.module.css" ;

const EmployeeIdReport = () => {
  return (
    <section className={styles.reports}>
        <h3>Employee residency status report with employee ID</h3>
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead className={styles.headCont}>
                    <tr className={styles.tableHeadings}>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Iqama Number</th>
                        <th>Iqama Issue Date</th>
                        <th>Iqama Expiry Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className={styles.bodyCont}>
                    <tr className={styles.tableRow}>
                        <td>1001</td>
                        <td>Ahmed Ali</td>
                        <td> 2345678901</td>
                        <td>2023-06-15</td>
                        <td>2025-06-15</td>
                        <td className={styles.end}><div><div className={styles.colorCont} id={styles.active}><span></span>Active</div></div></td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>1002</td>
                        <td>Fatima Khan</td>
                        <td> 3456789012</td>
                        <td>2022-11-20</td>
                        <td>2024-11-20</td>
                        <td className={styles.end}><div><div className={styles.colorCont} id={styles.expiring}><span></span>Expiring Soon</div></div></td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>1003</td>
                        <td>Saeed Omar</td>
                        <td>4567890123</td>
                        <td>2021-12-10</td>
                        <td>2023-12-10</td>
                        <td className={styles.end}><div><div className={styles.colorCont} id={styles.expired}><span></span>Expired</div></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default EmployeeIdReport