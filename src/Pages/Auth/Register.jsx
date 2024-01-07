  import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { auth } from "../../firebase/config";
// import Loader from "../../components/Loader/Loader";

const Register = () => {
  const [reg, setReg] = useState({
    email: "",
    phone: "",
    userName: "",
    password: "",
    cPassword: "",
  });
  const [isloading, setisLoading] = useState(false);
  const [verified, isVerified] = useState(false);

  const navigate = useNavigate();

  // const auth = getAuth();
  const register = (e) => {
    e.preventDefault();
    if (reg.password != reg.cPassword) {
      toast.error("Password do not match.");
    } else {
      setisLoading(true);
      createUserWithEmailAndPassword(auth, reg.email, reg.password)
        .then((userData) => {
          const user = userData.user;
          console.log(user);
          setisLoading(false);
          toast.success("User Registered....");
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorEmail = error?.code;
          if (errorCode === "auth/weak-password") {
            toast.error("password is to weak.");
          }
          if (errorEmail === "auth/email-already-in-use") {
            toast.error("email already used .");
          }
          if (errorEmail === "auth/network-request-failed") {
            toast.error("Check your network Connection");
          }
          // toast.error(error.message)
          setisLoading(false);
          console.log(error);
        });
    }
  };

  // const register = (e) => {
  //   e.preventDefault();
  //   if (reg.password != reg.cPassword) {
  //     toast.error("Password do not match.");
  //   }
  //   setisLoading(true);f

  //   createUserWithEmailAndPassword(auth, reg.email, reg.password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //       setisLoading(false);
  //       toast.success("User Registered....");
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //       setisLoading(false);
  //     });
  // };
  const handleChange = (field, value) => {
    setReg((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      {/* {isloading ? <Loader /> : ""} */}
      <div className="h-[70vh]">
        <div className=" flex justify-between flex-row-reverse m-auto w-[80%] lg:w-[100%] xlg:w-[85%] h-[80vh] items-center ">
          <div className="hidden md:block w-[39%]">
            <img
              src="https://launchpad.sharda.ac.in/assets/imgs/join-now.png"
              alt=""
            />
          </div>
          <div className=" bg-transparent shado rounded-xl w-[100%] md:w-[70%] lg:w-[45%]  px-5 py-5  ">
            <h1 className="text-center text-2xl font-bold mb-5">Register</h1>
            <form action="" onSubmit={register} className="space-y-3 w-[100%]">
              <div className=" flex flex-col space-y-1">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={reg.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input
                    type="Password"
                    name="Password"
                    required
                    value={reg.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Password"
                  />
                </label>
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input
                    type="Password"
                    name="Confirm Password"
                    required
                    value={reg.cPassword}
                    onChange={(e) => handleChange("cPassword", e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Confirm Password"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="bg-purple-300 w-full p-2 rounded text-black hover:bg-purple-950 shadow-2xl hover:ease-in-out duration-[0.8s]  hover:text-white"
              >
                {isloading ? "Loading...." : "Register"}
              </button>

              <p>
                Already have an account?
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
