import React, { useContext } from "react";
import { OurShopContext } from "@/context/OurShopProvider";
import Layout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../style.module.scss";

const ListProducts = () => {
  const { products, isShowGrid } = useContext(OurShopContext);
  const { containerProduct } = styles;
  return (
    <>
      <Layout>
        <div className={isShowGrid ? containerProduct : ""}>
          {products.map((product) => (
            <ProductItem
              key={product._id}
              src={product.images[0]}
              prevSrc={product.images[1]}
              title={product.name}
              price={product.price}
              detail={product}
              isHomePage={false}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ListProducts;
