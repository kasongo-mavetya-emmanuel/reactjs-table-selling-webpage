import React, { useContext } from "react";
import { ScrollContext } from "../../store/scroll-context";
import hero from "../../assets/hero.webp";
import classes from "./Header.module.css";
import "aos/dist/aos.css";

function Header() {
  const scrollCtx = useContext(ScrollContext);

  const scrollTo = () => {
    setTimeout(() => {
      scrollCtx.productsRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <header data-aos="fade-up">
      <div className={classes["text-box"]}>
        <h1>We design and build better tables, for a better life</h1>
        <p>
          Aliquip qui sit do dolore et veniam cillum aliqua. Officia fugiat ut
          ut nulla veniam aute amet veniam aliqua irure sit. Officia fugiat ut
          ut nulla veniam aute amet veniam.
        </p>
        <button onClick={scrollTo}>Order Now</button>
      </div>
      <img src={hero} alt="A table with chair" />
    </header>
  );
}

export default Header;
