import React from "react";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import Cart from "@/app/_components/Cart.jsx";
import PathLink from "@/app/_components/PathLink";
import { useSelector } from "react-redux";

const ProductSection = () => {
  const loading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);

  return (
    <section className="product--section">
      <div className="container">
        <PathLink content="Product" />
        <div className="line"></div>
        <div className="product--section__wrapper">
          <ProductInfo />
          {loading ? (
            <div>Loading ... </div>
          ) : error ? (
            <div>Không tìm thấy dữ liệu</div>
          ) : (
            <ProductList />
          )}
          <Cart />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
