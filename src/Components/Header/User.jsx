import React, { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { GrHelp } from "react-icons/Gr";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

const User = ({ close }) => {
  //   const user = true;
  //   const [profileOpen, setProfileOpen] = useState(false);

  //   const close = () => {
  //     setProfileOpen(null);
  //   };

  return (
    <div>
      <div
        onClick={close}
        className=" it absolute z-99 shadow-2xl rounded-xl h-[40vh] p-4 bg-white right-2  w-60"
      >
        <div className="space-y-1">
          <div className="flex items-center ">
            <img
              src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
              width="40"
              height="256"
              alt=""
              title=""
              class="img-small"
            />
            <div className="pl-4">
              <h4>John Ayeobasan</h4>
              <p className="  text-sm" htmlFor="">
                Lagos, NG
              </p>
            </div>
          </div>
          <div className="space-y-1 pl-3 w-full ">
            <button className="flex items-center w-full ">
              <IoIosSettings size={28} />
              <div className="account">My Accout</div>
            </button>
            <button className="flex items-center w-full">
              <BsBagCheck size={25} />
              <div className="account">My Orders</div>
            </button>
            <button className="flex items-center w-full">
              <AiOutlineHeart size={25} />
              <div className="account">My WishList</div>
            </button>
            <button className="flex items-center w-full">
              <GrHelp size={25} />
              <div className="account">My Help</div>
            </button>
            <button className="flex items-center w-full">
              <BiLogOut size={25} />
              <div className="account ">LogOut</div>
            </button>
          </div>
        </div>
      </div>
      {/* {user ? (
        <>
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <img
              src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
              width="50"
              height="256"
              alt=""
              title=""
              class="img-small"
            />
          </button>
        </>
      ) : (
        "login"
      )}
      {profileOpen && (
        <div onClick={close} className=" shadow-2xl ">
          <div className="bg-black">
            <img
              src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
              width="50"
              height="256"
              alt=""
              title=""
              class="img-small"
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default User;
