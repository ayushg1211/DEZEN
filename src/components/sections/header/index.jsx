import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerCont}>
      <div className={styles.header}>
            <div className={styles.imgCont}>
              <a href="/">
                <img src="/images/awnlogo21.png" alt="Your Site Logo" />
              </a>
            </div>
            <time datetime="2025-03-25" className={styles.date}><span className={styles.text}>Date:</span> <span className={styles.mar}>13 Mar 2025</span></time>
      </div>
    </header>
  );
};

export default Header;
