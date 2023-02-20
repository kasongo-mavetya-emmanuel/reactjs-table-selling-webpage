import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Testimonial from "./components/Testimonial/Testimonial";
import Products from "./components/Products/Products";
import classes from "./App.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className={classes.app}>
      <Header />
      <Features />
      <Testimonial />
      <Products />
      <footer>
        <p>Done By kasongo-mavetya-emmanuel</p>
      </footer>
    </div>
  );
}

export default App;
