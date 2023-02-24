import React, { useEffect, useState } from "react";
import header1 from "../../Images/header1.png";
import header2 from "../../Images/header2.png";
import header3 from "../../Images/header3.png";
import header4 from "../../Images/header4.png";
import headerlast from "../../Images/headerlast.png";
import { Heading, Image, SimpleGrid } from "@chakra-ui/react";
import styles from "../HomePage/Homepage.module.css";
import Card from "../../Components/Card";
import axios from "axios";

const Homepage = () => {
  const [homeData, setHomeData] = useState([]);

  const getHomeData = async () => {
    try {
      let res = await axios.get("http://localhost:8080/homepage");

      setHomeData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHomeData();
  }, []);

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

      <Heading p="10px">Products For You</Heading>
      <SimpleGrid
        w="95%"
        p="10px 80px 30px 80px"
        margin="auto"
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {homeData &&
          homeData.map((item) => (
            <Card
              hover={item.hover}
              title={item.title}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}
              image={item.image}
            />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Homepage;
