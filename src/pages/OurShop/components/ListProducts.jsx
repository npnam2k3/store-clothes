import React, { useContext } from "react";
import { OurShopContext } from "@/context/OurShopProvider";
import Layout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../style.module.scss";
import Button from "@components/Button/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ListProducts = () => {
  const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
    useContext(OurShopContext);
  const { containerProduct, sectionListProduct, rotate } = styles;

  return (
    <div className={sectionListProduct}>
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
            {products.length < total && (
              <div
                style={{
                  width: "180px",
                  margin: "50px auto",
                }}
              >
                <Button
                  content={
                    isLoadMore ? (
                      <AiOutlineLoading3Quarters className={rotate} />
                    ) : (
                      "LOAD MORE PRODUCT"
                    )
                  }
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        )}
      </Layout>
    </div>
  );
};

export default ListProducts;
