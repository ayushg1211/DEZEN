import React from 'react'
import styles from "./Summary.module.css" ;

const Summary = () => {
  return (
    <section className={styles.summary}>
        <h3>Summary</h3>
        <div className={styles.tableWrapper}>
        <table className={styles.table}>
            <tbody>
                <tr className={styles.rows}>
                    <td className={styles.leftCol}>Total number of employees</td>
                    <td className={styles.rightCol}>5</td>
                </tr>
                <tr className={styles.rows}>
                    <td className={styles.leftCol}>Total number of non saudi employees</td>
                    <td className={styles.rightCol}>3</td>
                </tr>
                <tr className={styles.rows}>
                    <td className={styles.leftCol}>Total number of Iqama</td>
                    <td className={styles.rightCol}>3</td>
                </tr>
                <tr className={styles.rows}>
                    <td className={styles.leftCol}>Iqama status distribution</td>
                    <td className={styles.rightCol}>1 active, 1 expiring soon, 1 expired</td>
                </tr>
            </tbody>
        </table></div>
    </section>
  )
}

export default Summary