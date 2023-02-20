import FeatureItem from "./featureItem";
import classes from "./Features.module.css";
import {
  IoFlaskOutline,
  IoHappyOutline,
  IoHeartOutline,
} from "react-icons/io5";

import { IconContext } from "react-icons";
import "aos/dist/aos.css";

const Features = () => {
  return (
    <IconContext.Provider value={{ className: `${classes["icon-style"]}` }}>
      <section data-aos="fade-up">
        <h2>What makes our tables special</h2>
        <div className={classes["grid-col"]}>
          <FeatureItem
            className={classes["icon-style"]}
            icon={<IoFlaskOutline />}
            title={"Science meets design"}
          />

          <FeatureItem
            className={classes["icon-style"]}
            icon={<IoHappyOutline />}
            title={"Maximal comfort"}
          />
          <FeatureItem
            className={classes["icon-style"]}
            icon={<IoHeartOutline />}
            title={"Ethical and sustainable"}
          />
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Features;
