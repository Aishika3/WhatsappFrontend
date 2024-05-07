import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { app, auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./styles.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles.css";
import { Cookies } from "react-cookie";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { Banner } from "components";
import OtpInput from "react-otp-input";
//import PhoneInput from 'react-phone-number-input';
import { useThemeContext } from "providers";

const Login = () => {
  const { theme } = useThemeContext();
  // Inputs
  const [mynumber, setnumber] = useState("+");
  const [otp, setotp] = useState("");
  const [userid, setUserid] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const cookies = new Cookies();
  const token = cookies.get("userid");
  const navigate = useNavigate();

  setTimeout(() => {
    if (token != null) {
      navigate("/");
    }
  }, 1000);
  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber < 10) return;
    if (token) navigate("/");
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    signInWithPhoneNumber(auth, "+" + mynumber, window.recaptchaVerifier)
      .then((result) => {
        //console.log(auth.currentUser.uid);
        setfinal(result);
        alert("OTP sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    if (otp.length === 6) {
      final
        .confirm(otp)
        .then((result) => {
          cookies.set("userid", auth.currentUser.uid);
          navigate("/");
        })
        .catch((err) => {
          alert("Wrong code");
        });
    }
  };

  return (
    <div
      className="main font-[inter] m-auto rounded-md shadow-2xl pt-10"
      style={{ backgroundColor: theme.backgroundColor.light }}
    >
      <center>
        <div style={{ display: !show ? "block" : "none" }}>
          <h1
            className="text-4xl font-bold"
            style={{ color: theme.color.light }}
          >
            Registration
          </h1>
          <section style={{ color: theme.color.light }} className="mt-2">
            <p>Enter your phone number to recieve OTP</p>
            <p>No Credit Card Required!</p>
          </section>

          <br />

          <PhoneInput
            international
            defaultCountry="IN"
            country={"in"}
            value={mynumber}
            onChange={setnumber}
            inputProps={{
              className: "phone-input",
            }}
            dropdownClass="phone-input-country"
          />
          <br />
          <div id="recaptcha-container"></div>
          <button
            onClick={signin}
            className="bg-transparent hover:bg-PrimaryCyan text-PrimaryCyan font-semibold hover:text-white py-2 px-4 border border-PrimaryCyan hover:border-transparent rounded"
          >
            Send OTP
          </button>
          <div class="text">
            <br />
          </div>
        </div>

        <div style={{ display: show ? "block" : "none" }}>
          <div style={{ display: show ? "block" : "none" }}>
            <div class="heading">
              <h1>Verification</h1>
            </div>
            <div class="info">
              <p>Enter the six digit otp:</p>
            </div>
            <div class="otp">
              <OtpInput
                value={otp}
                onChange={setotp}
                numInputs={6}
                renderSeparator={<span>--</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    className="otp-input"
                    style={{ width: "40px" }}
                  />
                )}
              />
            </div>
            <br />
            <br />
            <button
              className={`verify-button ${otp.length === 6 ? "clickable" : ""}`}
              onClick={ValidateOtp}
              disabled={otp.length !== 6}
            >
              Verify
            </button>
          </div>
        </div>

        <div class="m-auto">
          <img
            class="m-auto"
            src="/assets/images/WhatsappAutomator-7fceac20.svg"
            alt=""
            width="200"
          />
        </div>

        <div className="f-icons">
          <a href="https://www.linkedin.com/company/automatiks/">
            <Linkedin color="#01CEA5" size={"2rem"} />
          </a>
          <a href="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
            <Twitter color="#01CEA5" size={"2rem"} />
          </a>
        </div>
      </center>
    </div>
  );
};

export default Login;
