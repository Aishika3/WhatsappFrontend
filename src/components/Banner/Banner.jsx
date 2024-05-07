import React from "react";
import { Cookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useThemeContext } from "providers";
import AutomatiksLogo from "assets/automatiks_new_logo.jpg";
import { getAuth, signOut } from "firebase/auth";

export const Banner = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("userid");
  const { theme } = useThemeContext();
  const auth = getAuth();
  return (
    <section
      style={{ backgroundColor: theme.backgroundColor.light }}
      className="flex flex-col md:flex-row shadow-xl rounded-full md:w-[70%] sm:w-[80%] m-auto backdrop-blur-xl opacity-90 py-4"
    >
      <div className="m-auto">
        <Link to="/">
          <img
            src={AutomatiksLogo}
            width="80"
            height="80"
            alt="automatiks"
            className="rounded-full"
          />
        </Link>
      </div>
      <div className="m-auto flex flex-col md:flex-row md:gap-4">
        {token && (
          <Link
            to="/fillform"
            className="m-base text-lg hover:text-white hover:shadow-lg p-sm transition select-all border-b-0 px-4 hover:border-b-2"
            style={{ color: theme.color.light, borderColor: theme.color.light }}
          >
            My Form
          </Link>
        )}
        {token && (
          <button
            className="m-base text-lg hover:text-white hover:shadow-lg p-sm transition select-all border-b-0 px-4 hover:border-b-2"
            style={{ color: theme.color.light, borderColor: theme.color.light }}
            onClick={() => {
              signOut(auth)
                .then(() => {
                  cookies.remove("userid");
                  navigate("/");
                })
                .catch((error) => {
                  console.log(error);
                  // An error happened.
                });
            }}
          >
            Logout
          </button>
        )}

        {token ? (
          <Link
            to="/signin"
            className="m-base text-lg hover:text-white hover:shadow-lg p-sm transition-all border-b-0 px-1 hover:border-b-2"
            style={{ color: theme.color.light, borderColor: theme.color.light }}
          >
            My Account
          </Link>
        ) : (
          <Link
            to="/signin"
            className="m-base text-lg hover:text-white hover:shadow-lg p-sm transition-all border-b-0 px-1 hover:border-b-2"
            style={{ color: theme.color.light, borderColor: theme.color.light }}
          >
            Sign In
          </Link>
        )}
        <a
          href="https://automatiks.in/"
          target="_blank"
          rel="noreferrer"
          className="m-base text-lg hover:text-white hover:shadow-lg p-sm transition-all border-b-0 px-1 hover:border-b-2"
          style={{ color: theme.color.light, borderColor: theme.color.light }}
        >
          About Us
        </a>
      </div>
    </section>
  );
};

export default Banner;
