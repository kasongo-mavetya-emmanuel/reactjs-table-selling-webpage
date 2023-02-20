import classes from "./ProductFeature.module.css";

const ProductFeature = (props) => {
  return (
    <li>
      <span>{props.icon}</span>
      <span>{"   "}</span>
      <span>{props.description}</span>
    </li>
  );
};

export default ProductFeature;
