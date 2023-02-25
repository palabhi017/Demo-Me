import React from 'react'
import styles from "../CSS/PaymentPage.module.css";

const PaymentPage = () => {
  return (
    <div className={styles.container} >
        <div className={styles.left} >
          <h3 className={styles.header}>Billing Address</h3>

          <form >
                Full Name:
                <input type="text" name="" placeholder='Enter Name' />
                Email
                <input type="text" name="" placeholder='Enter Email' />
                Address:
                <input type="text" name="" placeholder='Enter Address' />
                City:
                <input type="text" name="" placeholder='Enter City' />

                <div className={styles.zip}>
                  <label >
                    State:
                 
                      <select  >
                        <option value="">Choos State..</option>
                        <option value="">Jharkhand</option>
                        <option value="">Delhi</option>
                        <option value="">Uttar Pradesh</option>
                        <option value="">Madhya Pradesh</option>
                      </select>
                  </label>

                  <label>
                    Zipcode:
                    <input type="number" placeholder='ZipCode' />
                  </label>
                </div>
          </form>

        </div>


        <div className={styles.right} >
              <h3 className={styles.header}>Payment</h3>

              <form >
                Accepted Cards:
                <img src="./visa.png" alt="" style={{width:"100px",marginTop:"2%"}} />
                <br/>
                <br/>
                
                Credit Card Number
                <input type="text" name="" placeholder='Enter card number' />

                Exp Month
                <input type="text" name="" placeholder='Enter month' />

                <div className={styles.zip}>
                  <label >
                    Exp Year
                 
                      <select  >
                        <option value="">Choos Year</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                        <option value="">2025</option>
                        <option value="">2026</option>
                      </select>
                  </label>

                  <label>
                    CVV:
                    <input type="number" placeholder='CVV' />
                  </label>
                </div>
                <input type="submit" value="Proceed to checkout" />
          </form>
             
        </div>
    </div>
  )
}

export default PaymentPage
