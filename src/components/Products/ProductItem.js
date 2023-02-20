import ProductFeature from "./ProductFeature";
import classes from "./ProductItem.module.css";
import {
  IoSparklesOutline,
  IoTimeOutline,
  IoCubeOutline,
  IoGlobeOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";

const ProductItem = (props) => {
  return (
    <IconContext.Provider value={{ className: `${classes.icon}` }}>
      <figure>
        <img src={props.image} alt={props.altMessage} />
        <div className={classes["description-box"]}>
          <h3>{props.title}</h3>
          <ul>
            <ProductFeature
              icon={<IoSparklesOutline />}
              description={props.listProductFeacture[0].description}
            />
            <ProductFeature
              icon={<IoTimeOutline />}
              description={props.listProductFeacture[1].description}
            />
            <ProductFeature
              icon={<IoCubeOutline />}
              description={props.listProductFeacture[2].description}
            />
          </ul>
          <div className={classes["price-row"]}>
            <div>
              <strong>{props.price}</strong>
            </div>
            <a href="#">Add To Card</a>
          </div>
        </div>
      </figure>
    </IconContext.Provider>
  );
};

export default ProductItem;
