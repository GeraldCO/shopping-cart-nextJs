import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import classes from "./Products.module.css";
import { Item as ProductItem } from "@/types/items";
import Link from "next/link";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Container } from "@mui/material";
import DefaultLayout from "@/layouts/DefaulLayout";

//product categories
import allProducts from "../../data/allCategories";
import videGameConsoles from "../../data/gameConsoles";
import graphicCards from "../../data/graphicCards";
import laptops from "../../data/laptops";
import preBuilts from "../../data/preBuilts";
import processors from "../../data/processors";

const Product = () => {
  //console.table(allCategories);
  const [categorySelected, setCategorySelected] = useState(allProducts);
  const productsList = categorySelected.map((product: ProductItem) => {
    return (
      <Grid2 xs={4}>
        <Container maxWidth="sm">
          <Link href={`/productDetails?pid=${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </Container>
      </Grid2>
    );
  });
  const setCategory = (categoryName: ProductItem[]) => {
    setCategorySelected(categoryName);
  };
  return (
    <DefaultLayout>
      <div className="container">
        <main className="row">
          <div className="col-3">
            <ul className={classes.categories}>
              <h4>Categories</h4>
              <li>
                <input
                  id="all-products"
                  value="all-products"
                  type="radio"
                  name="categories"
                  onChange={() => {
                    setCategory(allProducts);
                  }}
                />
                All Categories
              </li>
              <li>
                <input
                  id="video-game-consoles"
                  value="video-game-consoles"
                  type="radio"
                  name="categories"
                  onChange={() => {
                    setCategory(videGameConsoles);
                  }}
                />
                Video game consoles
              </li>
              <li>
                <input
                  id="graphic-cards"
                  value="graphic-cards"
                  type="radio"
                  name="categories"
                  onChange={() => {
                    setCategory(graphicCards);
                  }}
                />
                Graphic Cards
              </li>
              <li>
                <input
                  id="laptops"
                  value="laptops"
                  type="radio"
                  name="categories"
                  onChange={() => {
                    setCategory(laptops);
                  }}
                />
                Laptops
              </li>
              <li>
                <input
                  id="pre-builts"
                  value="pre-builts"
                  type="radio"
                  name="categories"
                  onChange={() => {
                    setCategory(preBuilts);
                  }}
                />
                Pre Builts
              </li>
            </ul>
          </div>
          <div className="grid col-9">
            <div className="row">
              <Grid2
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {productsList}
              </Grid2>
            </div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Product;
