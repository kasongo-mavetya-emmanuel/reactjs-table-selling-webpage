import React, { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../../store/scroll-context";
import hero from "../../assets/hero.webp";
import classes from "./Header.module.css";
import "aos/dist/aos.css";
import lozad from "lozad";

function Header() {
  const scrollCtx = useContext(ScrollContext);
  const heroImg = useRef();

  useEffect(() => {
    const observer = lozad(heroImg.current);
    observer.observe();
    // return () => {
    //   observer.disconnect();
    // };
  }, []);

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
      <img
        className="lozad"
        ref={heroImg}
        data-src={hero}
        data-placeholder-background="grey"
        alt="A table with chair"
      />
    </header>
  );
}

export default Header;
