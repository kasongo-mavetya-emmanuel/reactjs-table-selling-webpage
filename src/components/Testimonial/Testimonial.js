import testimonial from "../../assets/testimonial.webp";
import classes from "./Testimonial.module.css";
import "aos/dist/aos.css";

const Testimonial = function () {
  return (
    <section data-aos="fade-right">
      <div className={classes["grid-col"]}>
        <img src={testimonial} alt="a woman working on a table" />
        <div className={classes["quote-block"]}>
          <h2>"I couldn't live without these table anymore"</h2>
          <blockquote>
            Ex voluptate minim mollit elit laboris minim irure commodo.
            Voluptate veniam dolore minim nostrud eiusmod sunt dolore dolor
            irure aliquip. Non cillum ipsum dolore esse. Amet nisi deserunt id
            laborum fugiat pariatur proident ex.
          </blockquote>
          <p>&mdash; Maria Gombe</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
