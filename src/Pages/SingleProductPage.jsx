import React, { useEffect, useState } from "react";
import styles from "../CSS/SinglePage.module.css";
import { StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// const initialData={
//     title:"COMBRAIDED Striped Pink N White Short Sleeve Lycra Shirt For Men",
//     image:"https://images.meesho.com/images/products/132914847/hjlhm_512.webp",
//     price:"Rs-147",
//     rating:"4.2",
//     reviews:"118 reviews",
//     category:"Beauty & Health",
//     tag:"Lips",
//   }

const SingleProductPage = () => {
  const [userData, setUserData] = useState({});
  const [loginUserData, setLoginUserData] = useState({});
  const { image, name, price } = userData;
  const userId = useSelector((state) => state.Auth.currentUser);
  const { id } = useParams();
  const getSingleUserData = async () => {
    let res = await fetch(`http://localhost:8080/products/${id}`);
    let data = await res.json();

    setUserData(data);
  };

  const getUserData = async () => {
    try {
      let r = await fetch(`http://localhost:8080/login/${userId}`);
      let d = await r.json();

      setLoginUserData(d.cart);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userData)

  const cartDetails = async () => {
    try {
      let r = await fetch(`http://localhost:8080/login/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          cart: [
            ...loginUserData,
            { image, price, name, quantity: 1, orderId: Date.now() },
          ],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let d = await r.json();
      console.log(d);
    } catch (error) {
      console.log(error);
    }
    // setTimeout(()=>{
    //   dispatch(getUsersData())
    // },1500)
  };

  useEffect(() => {
    getSingleUserData();
    getUserData()
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.lhsContainer}>
        <div className={styles.smallImageContainer}>
          <div className={styles.smallImages}>
            <img
              src={userData && userData.image}
              alt=""
              className={styles.smallImage}
            />
          </div>

          <div className={styles.smallImages}>
            <img
              src={userData && userData.image}
              alt=""
              className={styles.smallImage}
            />
          </div>

          <div className={styles.smallImages}>
            <img
              src={userData && userData.image}
              alt=""
              className={styles.smallImage}
            />
          </div>

          <div className={styles.smallImages}>
            <img
              src={userData && userData.image}
              alt=""
              className={styles.smallImage}
            />
          </div>
        </div>

        <div className={styles.ImageContainer}>
          <img
            src={userData && userData.image}
            alt=""
            className={styles.image}
          />

          {/* ----------------------------------------button-------------------------------- */}
          <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={()=> cartDetails()}>Add to Cart</button>
            <button className={styles.btn} style={{ background: "#f43397" }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.rhsContainer}>
        <div className={styles.rhsData}>
          <h3 style={{ color: "gray" }}>{userData && userData.title}</h3>
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            {userData && userData.price}
          </h1>

          <div style={{ display: "flex", marginTop: "2%" }}>
            <div className={styles.rating}>
              {userData && userData.rating}
              <StarIcon w={13} />
            </div>
            <p className={styles.review}>{userData && userData.reviews}</p>
          </div>

          <div className={styles.deleveryBox}>Free delivery</div>
        </div>

        <div className={styles.rhsData} style={{ display: "flex" }}>
          <div
            style={{ fontSize: "20px", fontWeight: "bold", marginTop: "3%" }}
          >
            Select Size
          </div>
          <div className={styles.sizeBox}>S</div>
          <div className={styles.sizeBox}>M</div>
          <div className={styles.sizeBox}>X</div>
          <div className={styles.sizeBox}>XL</div>
        </div>

        <div className={styles.rhsData}>
          <h2>Product details</h2>
          <p> Name : {userData && userData.title}</p>
          <p>Fabric : Lycra</p>
          <p>Sleeve Length : Short Sleeves</p>
          <p>Pattern : Striped</p>
          <p>Net Quantity (N) : 1</p>
          <h3>Sizes : </h3>
          <p>S (Chest Size : 38 in, Length Size: 27 in)</p>
          <p>XL (Chest Size : 44 in, Length Size: 28.5 in)</p>
          <p> L (Chest Size : 42 in, Length Size: 28 in)</p>
          <p> M (Chest Size : 40 in, Length Size: 27.5 in)</p>
          <p>• Fabric : Lycra</p>
          <p>• Sleeve : Short Sleeve / Half Sleeve</p>
          <p>• Fit : Slim</p>
          <p>• Pattern : Striped</p>
          <p>Country of Origin : India</p>
        </div>

        <div className={styles.rhsData} style={{ display: "flex" }}>
          <div className={styles.bottomRating}>
            <h1
              style={{ fontSize: "30px", fontWeight: "bold", marginTop: "20%" }}
            >
              {userData && userData.rating}
            </h1>
            <StarIcon w={30} className={styles.star} />
          </div>

          <div className={styles.ratingDiagram}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="./ratingImage.png"
              alt=""
            />
          </div>
        </div>

        <div>
          <img
            style={{ width: "90%", height: "200px", marginTop: "3%" }}
            src="./lowestPrice.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
