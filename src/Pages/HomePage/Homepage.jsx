import React from "react";
import { Image } from "@chakra-ui/react";
import styles from "../HomePage/Homepage.module.css";
import header1 from "../../Images/header1.png";
import header2 from "../../Images/header2.jpg";
import header3 from "../../Images/header3.jpg";
import header4 from "../../Images/header4.jpg";
import header5 from "../../Images/header5.jpg";

const Homepage = () => {
  return (
    <div>
      <header className={styles.header}>
        <Image alt="" src={header1}></Image>
        <p>Top Categories to choose from</p>
        <Image alt="" src={header2}></Image>
        <Image alt="" src={header3}></Image>
        <Image alt="" src={header4}></Image>
        <Image alt="" src={header5}></Image>
      </header>
    </div>
  );
};

export default Homepage;
