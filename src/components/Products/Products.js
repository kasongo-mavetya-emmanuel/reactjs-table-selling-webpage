import React, { useContext } from "react";
import { ScrollContext } from "../../store/scroll-context";
import ProductItem from "./ProductItem";
import steelLegsTable from "../../assets/steellegstable.webp";
import tableWithDrawer from "../../assets/tablewithdrawer.webp";
import wallTable from "../../assets/walltable.webp";
import classes from "./Products.module.css";
import "aos/dist/aos.css";

const Products = () => {
  const scrollCtx = useContext(ScrollContext);

  return (
    <section data-aos="fade-up" ref={scrollCtx.productsRef}>
      <h2>Our Best Selling</h2>
      <div className={classes["grid-col"]}>
        <ProductItem
          image={steelLegsTable}
          title={"Steel Legs"}
          price={"$ 50"}
          altMessage={"pc on table"}
          listProductFeacture={[
            {
              description: "Aute eiusmod irure mi.",
            },
            {
              description: "velit incididunt cillum.",
            },
            {
              description: "tempor exercitation tu.",
            },
          ]}
        />
        <ProductItem
          image={tableWithDrawer}
          title={"Classic"}
          price={"$ 150"}
          altMessage={"chair to table with a pc on"}
          listProductFeacture={[
            {
              description: "Aute eiusmod irure min.",
            },
            {
              description: "velit incididunt cillum.",
            },
            {
              description: "tempor exercitation tu.",
            },
          ]}
        />
        <ProductItem
          image={wallTable}
          title={"Custom Table"}
          price={"$ 100"}
          altMessage={"table next the wall and chair"}
          listProductFeacture={[
            {
              description: "Aute eiusmod irure mi.",
            },
            {
              description: "velit incididunt cillum.",
            },
            {
              description: "tempor exercitation tu.",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Products;
