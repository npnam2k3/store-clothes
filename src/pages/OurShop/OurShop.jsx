import Header from "@components/Header/Header";
import Layout from "@components/Layout/Layout";
import React from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "@/pages/OurShop/components/Banner";
import { OurShopProvider } from "@contexts/OurShopProvider";
import Filter from "@pages/OurShop/components/Filter";

const OurShop = () => {
  const { container, functionBox, specialText, btnBack } = styles;
  const navigate = useNavigate();
  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <Header />
      <Layout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>Shop</span>
            </div>
            <div onClick={handleBackPreviousPage} className={btnBack}>
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
        </div>
      </Layout>
    </OurShopProvider>
  );
};

export default OurShop;
