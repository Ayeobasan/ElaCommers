import {
  GoogleAuthProvider,
  // getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import Loader from "../../components/Loader/Loader";
import { auth } from "../../Firebase";
// import { Toast } from "react-toastify/dist/components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState({ email: "", password: "" });
  const [isloading, setisLoading] = useState(false);

  const navigate = useNavigate();

  // const email = login.email;
  // const password = login.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    // const Auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        setisLoading(false);
        toast.success("Login Successful");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorEmail = error?.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("Wrong password.");
        }
        if (errorEmail === "auth/user-not-found") {
          toast.error("email doesn't exsit.");
        }
        if (errorEmail === "auth/invalid-login-credentials") {
          toast.error("email or password Invalid.");
        }
        if (errorEmail === "auth/network-request-failed") {
          toast.error("Check your network Connection");
        }
        // toast.error(error.message)
        console.log(error.message);

        setisLoading(false);
      });
  };

  // const provider = new GoogleAuthProvider();
  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       toast.success("Loging Successfully");
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  // const handleChange = (field, value) => {
  //   setLogin((prevData) => ({
  //     ...prevData,
  //     [field]: value,
  //   }));
  // };

  return (
    <>
      {/* {isloading ? <Loader /> : ""} */}
      <div className="h-[74vh]">
        <div className=" flex justify-between m-auto w-[80%] lg:w-[70%] xlg:w-[75%] items-center h-[90vh]">
          <div className="hidden md:block">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png"
              alt=""
            />
          </div>
          <div className=" bg-transparent shado rounded-xl w-[100%] md:w-[70%] lg:w-[45%]  px-5 py-5  ">
            <h1 className="text-center text-2xl font-bold mb-5">Login</h1>
            <form
              action=""
              onSubmit={handleSubmit}
              className="space-y-3 w-[100%]"
            >
              <div className=" flex flex-col space-y-1">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder="Password"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="bg-purple-300 w-full p-2 rounded hover:bg-purple-950 shadow-2xl hover:ease-in-out duration-[0.8s]  hover:text-white"
              >
                Login
              </button>
              <p>
                <a className="" href="reset">
                  Forget Password
                </a>
              </p>
              <p className="m-auto flex items-center justify-center">--or--</p>
              <button
                //   onClick={signInWithGoogle}
                type="submit"
                className="  bg-purple-950 w-full p-2 rounded hover:bg-purple-950 shadow-2xl hover:ease-in-out duration-[0.8s] text-white"
              >
                {" "}
                <div className="align-middle flex justify-between items-center lg:w-[70%] m-auto">
                  <i>
                    <FaGoogle size={23} />
                  </i>
                  <p>Login in With Google</p>
                </div>
              </button>
              <p>
                Don't have an account?
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
