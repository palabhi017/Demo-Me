import React from "react";
import Productpage from "../Productpage";
import header1 from "../../Images/header1.png";
import header2 from "../../Images/header2.png";
import header3 from "../../Images/header3.png";
import header4 from "../../Images/header4.png";
import headerlast from "../../Images/headerlast.png";
import { Image } from "@chakra-ui/react";
import styles from "../HomePage/Homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <header className={styles.header}>
        <Image alt="" src={header1} />
        <p>Top Categories to choose from</p>

        <Image alt="" src={header2} />
        <Image alt="" src={header3} />
        <Image alt="" src={header4} />
        <Image alt="" src={headerlast} />
      </header>

      {/* <Productpage /> */}
    </div>
  );
};

export default Homepage;
