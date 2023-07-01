import Logo from "../assets/logo.png";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useStore } from "../routes/store/store";
import Swal from "sweetalert2";
import LocationComponent from "./Geolocation";

export const Navbar = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState(true);
  const {
    profile_picture,
    token,
    role,
    removeToken,
    removeIdUser,
    removePassword,
    removeIdVenue,
    removeEmail,
    removeRole,
  } = useStore();

  useEffect(() => {
    if (token && typeof token === "string") {
      setLogin(false);
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const hendleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeToken();
        removeIdUser();
        removeIdUser();
        removePassword();
        removeIdVenue();
        removeEmail();
        removeRole();
        Swal.fire("Log Out", "logout Success", "success");
        Swal.fire("Log Out", "logout Success", "success");
        navigate("/");
      }
    });
  };

  return (
    <>
      <div className="navbar bg-darkBlue">
        <div className="flex-1 ml-4" id="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-32" />
          </Link>
        </div>
        <div className="flex-none">
          <div
            className="flex items-center gap-2 mr-5 font-semibold text-white"
            id="location"
          >
            <BsFillGeoAltFill />
            <p>
              <LocationComponent />
            </p>
          </div>
          {Login ? (
            <button
              className="mr-4 btn btn-warning"
              onClick={handleLogin}
              id="btn-login"
            >
              Login
            </button>
          ) : (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    id="avatar"
                    src={
                      profile_picture ||
                      "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li id="nav-profile">
                  <Link to={"/profile"}>
                    <a className="justify-between">Profile</a>
                  </Link>
                </li>
                <li id="nav-transaction">
                  <Link to={"/mytransaction"}>
                    <a>My Transaction</a>
                  </Link>
                </li>
                <li id="nav-user">
                  {role == "user" ? (
                    <Link to={"/validate"}>
                      <a>Become Owner</a>
                      <span className="badge badge-secondary">New</span>
                    </Link>
                  ) : (
                    <Link to={"/myvenue"}>
                      <a>My Venue</a>
                    </Link>
                  )}
                </li>
                <li
                  id="btn-logout"
                  className="font-bold text-red-500"
                  onClick={hendleLogout}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
