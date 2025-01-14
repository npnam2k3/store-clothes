import React, { useContext } from "react";
import { OurShopContext } from "@/context/OurShopProvider";
import Layout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../style.module.scss";
import Button from "@components/Button/Button";

const ListProducts = () => {
  const { products, isShowGrid, isLoading } = useContext(OurShopContext);
  const { containerProduct } = styles;

  return (
    <>
      <Layout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
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
            <div
              style={{
                width: "180px",
                margin: "50px auto",
              }}
            >
              <Button content={"LOAD MORE PRODUCT"} />
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default ListProducts;
