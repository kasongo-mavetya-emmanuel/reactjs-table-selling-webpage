import classes from "./FeatureItem.module.css";

const FeatureItem = (props) => {
  return (
    <div>
      {props.icon}
      <p className={classes["sub-header"]}>
        <strong>{props.title}</strong>
      </p>
      <p>
        Anim cillum anim esse consectetur anim magna excepteur non velit sint
        laborum.
      </p>
    </div>
  );
};

export default FeatureItem;
