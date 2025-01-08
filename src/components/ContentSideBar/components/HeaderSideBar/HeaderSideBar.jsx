import React from "react";

import styles from "./style.module.scss";

const HeaderSideBar = ({ icon, title }) => {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        {icon}
        <div>{title}</div>
      </div>
    </div>
  );
};

export default HeaderSideBar;
