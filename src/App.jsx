import React from "react";
import Header from "./components/sections/header";
import Ersr from "./components/sections/ersr";
import Footer from "./components/sections/footer";
import Summary2 from "./components/sections/summary2";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <Header />
        <Ersr />
        <Summary2 />
        <Footer />
      </div>
    </div>
  );
};

export default App;
