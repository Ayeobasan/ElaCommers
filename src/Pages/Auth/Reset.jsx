import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { toast } from "react-toastify";
// import Loader from "../../components/Loader/Loader";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isloading, setisLoading] = useState(false);

  const handleRest = (e) => {
    e.preventDefault();
    setisLoading(true);
    const errorCode = error?.code;

    if (errorCode === "auth/missing-email") {
      toast.error("email does  not exit");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setisLoading(false);
          setEmail("");
          toast.success("Check your Email to RestPassword");
        })
        .catch((error) => {
          // ..
        });
    }
  };

  return (
    <>
      {/* {isloading ? <Loader /> : ""} */}
      <div onSubmit={handleRest}>
        <div className="h-[74vh]">
          <div className=" flex justify-between m-auto w-[80%] lg:w-[70%] xlg:w-[70%] items-center h-[80vh]">
            <div className="hidden md:block w-[35%]">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3910/3910273.png"
                alt=""
              />
            </div>
            <div className="bg-transparent shado rounded-xl w-[100%] md:w-[70%] lg:w-[45%]  px-5 py-5  ">
              <h1 className="text-center text-2xl font-bold mb-5">
                Reset Password
              </h1>
              <form action="" className="space-y-3 w-[100%]">
                <div className=" flex flex-col space-y-1">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1  invalid:border-pink-500 invalid:text-pink-600
                  focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-purple-300 w-full p-2 rounded hover:bg-purple-950 shadow-2xl hover:ease-in-out duration-[0.8s]  hover:text-white"
                >
                  Reset Password
                </button>

                <p className="flex justify-between">
                  <p>
                    <Link to="/login">- Login</Link>
                  </p>

                  <p>
                    <Link to="/register">- Register</Link>
                  </p>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
