import React from 'react';
import './payment.css';

const PaymentForm = () => {
  return (
    <div className="pay-container">
      <form action="">
        <div className="pay-row">
          <div className="pay-col">
            <h3 className="pay-title">billing address</h3>
            <div className="pay-inputBox">
              <span>full name :</span>
              <input type="text" placeholder="john deo" />
            </div>
            <div className="pay-inputBox">
              <span>email :</span>
              <input type="email" placeholder="example@example.com" />
            </div>
            <div className="pay-inputBox">
              <span>address :</span>
              <input type="text" placeholder="street - locality - city" />
            </div>
            <div className="pay-inputBox">
              <span>city :</span>
              <input type="text" placeholder="Chandigarh" />
            </div>
            <div className="pay-flex">
              <div className="pay-inputBox">
                <span>state :</span>
                <input type="text" placeholder="india" />
              </div>
              <div className="pay-inputBox">
                <span>zip code :</span>
                <input type="text" placeholder="123 456" />
              </div>
            </div>
          </div>

          <div className="pay-col">
            <h3 className="pay-title">payment</h3>
            <div className="pay-inputBox">
              <span>cards accepted :</span>
              <img src="card_img.png" alt="" />
            </div>
            <div className="pay-inputBox">
              <span>name on card :</span>
              <input type="text" placeholder="mr. john deo" />
            </div>
            <div className="pay-inputBox">
              <span>credit card number :</span>
              <input type="number" placeholder="1111-2222-3333-4444" />
            </div>
            <div className="pay-inputBox">
              <span>exp month :</span>
              <input type="text" placeholder="eg.Jan" />
            </div>
            <div className="pay-flex">
              <div className="pay-inputBox">
                <span>exp year :</span>
                <input type="number" placeholder="2022" />
              </div>
              <div className="pay-inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="1234" />
              </div>
            </div>
          </div>
        </div>

        <button type="button" onClick={() => window.history.back()}>Go Back</button>
        <input type="submit" value="Confirm" className="pay-submit-btn" />
      </form>
    </div>
  );
}

export default PaymentForm;
