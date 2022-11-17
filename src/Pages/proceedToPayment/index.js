import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../Icons&Images";
import "../../scss/signup.scss";

const ProceedToPayment = () => {
  return (
    <div className="container-fluid text-cyan">
      <div className="row payment">
        <div className="col-lg-6">
          <img
            src={Images.signinImage}
            alt="sign up"
            className="signup-image"
          />
        </div>
        <div className="col-lg-6">
          <div>
            <form
              class="row g-5 m-5 p-5 shadow-lg p-3 mb-5 bg-body rounded lh-lg mt-10 pb-10"
              method=""
            >
              <h1 className="fs-24 text-blue fw-bold mt-10">Make Payment</h1>
              <p className="mb-12">It gets easy from here.</p>
              <div className="text-center">
                <img
                  src={Images.smileyFacePayment}
                  alt="paymentImage"
                  className=" payment-img"
                />
              </div>

              <p>
                You can pay using any of these medium, payment will be confirmed
                via mail and you are good to go!
              </p>

              <div class="col-12">
                <div class="d-flex justify-content-between">
                  <div class="form-check">
                    <input
                      class="form-check-input mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Bank Transfer
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Paystack
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label class="form-check-label" for="flexRadioDefault3">
                      Pay Installment (twice)
                    </label>
                  </div>
                </div>
              </div>

              <div class="d-grid gap-2 col-6 mx-auto mt-20">
                <button class="btn btn-primary" type="button">
                  Proceed to pay
                </button>
              </div>

              <div class="text-center mt-12">
                <p>
                  Do you have an account with us already?{" "}
                  <Link to="/signin">Sign in here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceedToPayment;
