import React, { useContext } from "react";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiBoxList } from "react-icons/ci";
import styles from "../style.module.scss";
import { OurShopContext } from "@contexts/OurShopProvider";
import SelectBox from "@pages/OurShop/components/SelectBox";

const Filter = () => {
  const { containerFilter, boxIcon, boxLeft, boxRight } = styles;
  const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);
  const getValueSelect = (value, type) => {
    if (type === "sort") {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };

  const handleShowGrid = (type) => {
    if (type === "grid") {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(false);
    }
  };

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type="sort"
        />
        <div className={boxIcon}>
          <TfiLayoutGrid4
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={() => handleShowGrid("grid")}
          />
          <div
            style={{
              height: "20px",
              width: "1px",
              backgroundColor: "#e1e1e1",
            }}
          ></div>
          <CiBoxList
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => handleShowGrid("list")}
          />
        </div>
      </div>

      <div className={boxRight}>
        <div style={{ fontSize: "14px", color: "#555" }}>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type="show"
        />
      </div>
    </div>
  );
};

export default Filter;
