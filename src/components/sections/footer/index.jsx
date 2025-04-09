import React from 'react'
import styles from "./Footer.module.css" ;

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.disclaimer}>
            <span className={styles.disclaimerText}>Disclaimer:</span> <p className={styles.disclaimerDes}>This report is for informational purposes only and is based on the latest available data from **AWN**. All details are subject to real-time updates, and verification from official sources is required before making decisions. **AWN** is not liable for discrepancies, outdated information, or actions taken based on this report.</p>
        </div>
        <section className={styles.footerInfoCont}>
            <div className={styles.infoCont}>
                <figure className={styles.footerlogoCont}><img src="/public/images/awnlogo21-white.png" alt="" /></figure>
                <div className={styles.contactCont}>
                    <div className={styles.contact}><span className={styles.contactIcons}><img src="/icons/phone.svg" alt="" /></span><span className={styles.contactText}>0582940754</span></div>
                    <div className={styles.contact}><span className={styles.contactIcons}><img src="/icons/mail.svg" alt="" /></span><span className={styles.contactText}>care@awn.s</span></div>
                    <div className={styles.contact}><span className={styles.contactIcons}><img src="/icons/globe.svg" alt="" /></span><span className={styles.contactText}>www.awn.sa</span></div>
                </div>
            </div>
                <div className={styles.servicesCont}>
                    <div className={styles.service}><span className={styles.serviceIcons}><img src="/icons/Group 5.svg" alt="" /></span><span className={styles.serviceText}>Business Setup Services</span></div>
                    <div className={styles.service}><span className={styles.serviceIcons}><img src="/icons/Group 5 (1).svg" alt="" /></span><span className={styles.serviceText}>Employees Compliance Services</span></div>
                    <div className={styles.service}><span className={styles.serviceIcons}><img src="/icons/Group 5 (2).svg" alt="" /></span><span className={styles.serviceText}>Business Compliance Services</span></div>
                    <div className={styles.service}><span className={styles.serviceIcons}><img src="/icons/Group 5 (3).svg" alt="" /></span><span className={styles.serviceText}>HR Management Services</span></div>
                </div>
            
        </section>
    </footer>
  )
}

export default Footer