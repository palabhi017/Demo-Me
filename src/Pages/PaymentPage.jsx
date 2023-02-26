import React from "react";
import styles from "../CSS/PaymentPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const userId = useSelector((state) => state.Auth.currentUser.id);
  const cartItems = useSelector((state) => state.Auth.currentUser.cart);
  // const [loginUserData,setLoginUserData] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const getUserData = async () => {
  //   try {
  //     let r = await fetch(`http://localhost:8080/login/${userId}`);
  //     let d = await r.json();

  //     setLoginUserData(d.cart);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(userData)

  const cartDetails = async () => {
    try {
      let r = await fetch(`http://localhost:8080/login/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          cart: [],
          order: [...cartItems],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let d = await r.json();
      dispatch({ type: AUTH_SUCCESS, payload: d });
      console.log(d);
    } catch (error) {
      console.log(error);
    }
    // setTimeout(()=>{
    //   dispatch(getUsersData())
    // },1500)
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("payment successful");
    cartDetails();
    navigate("/order");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.header}>Billing Address</h3>

        <form>
          Full Name:
          <input type="text" name="" placeholder="Enter Name" />
          Email
          <input type="text" name="" placeholder="Enter Email" />
          Address:
          <input type="text" name="" placeholder="Enter Address" />
          City:
          <input type="text" name="" placeholder="Enter City" />
          <div className={styles.zip}>
            <label>
              State:
              <select>
                <option value="">Choos State..</option>
                <option value="">Jharkhand</option>
                <option value="">Delhi</option>
                <option value="">Uttar Pradesh</option>
                <option value="">Madhya Pradesh</option>
              </select>
            </label>

            <label>
              Zipcode:
              <input type="number" placeholder="ZipCode" />
            </label>
          </div>
        </form>
      </div>

      <div className={styles.right}>
        <h3 className={styles.header}>Payment</h3>

        <form>
          Accepted Cards:
          <img
            src="./visa.png"
            alt=""
            style={{ width: "100px", marginTop: "2%" }}
          />
          <br />
          <br />
          Credit Card Number
          <input type="text" name="" placeholder="Enter card number" />
          Exp Month
          <input type="text" name="" placeholder="Enter month" />
          <div className={styles.zip}>
            <label>
              Exp Year
              <select>
                <option value="">Choos Year</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
              </select>
            </label>

            <label>
              CVV:
              <input type="number" placeholder="CVV" />
            </label>
          </div>
          <input
            type="submit"
            onClick={(e) => handlesubmit(e)}
            value="Proceed to checkout"
          />
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
