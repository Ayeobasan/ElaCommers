import React, { useEffect, useState } from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineSearch } from "react-icons/ai";
import CardItems from "./CardItems";
import { BiShoppingBag } from "react-icons/bi";
import Card from "./Card";
import Logo from "../../assets/images/ElaLogo.png";
import User from "./User";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // window.addEventListener("scroll", function () {
  //   const header = this.document.querySelectorAll(".header")
  //   header.classList.toggle("active", this.window.scrollY > 100)
  // })
  // window.scroll({ top: document.body.scrollHeight, behavior: "smooth" })

  const [cardOpen, setCardOpen] = useState(false);

  const openCard = () => {
    setCardOpen((prev) => !prev);
  };
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    localStorage.setItem("Quantity", JSON.stringify(quantity));
  }, [quantity]);

  const close = () => {
    setProfileOpen(null);
  };

  return (
    <>
      {cardOpen ? (
        <Card
          openCard={openCard}
          // total={total}
        />
      ) : (
        ""
      )}

      <div className="top-0">
        <header
          id="header"
          className="header fixed z-10  w-full bg-white shadow-xl h-[10vh] item-center flex flex-col justify-center"
        >
          <div className="flex items-center justify-between mx-7 ">
            <div>
              <Link to="/">
                <img className=" w-20 md:w-full" src={Logo} alt="" />
              </Link>
            </div>
            <div className=" hidden shadow-inner rounded-lg sm:flex w-[50%] border-2 items-center  ">
              <AiOutlineSearch className="w-[10%] h-5" />

              <input
                className="w-full bg-transparent rounded-l-md pl-3  h-[2rem]  outline-none "
                type="search"
                name=""
                placeholder="Search....."
                id=""
              />
            </div>
            <div className="flex align-middle items-center justify-between ">
              <div
                onClick={openCard}
                className="flex cursor-pointer items-start mr-[20px] "
              >
                <BiShoppingBag size={27} />
                <span>{quantity}</span>
              </div>

              <div className="">
                {user ? (
                  <>
                    <button onClick={() => setProfileOpen(!profileOpen)}>
                      <div>
                        <img
                          className="w-10"
                          src="   https://cdn-icons-png.flaticon.com/512/2202/2202112.png "
                        />
                      </div>
                    </button>
                  </>
                ) : (
                  "login"
                )}
              </div>
            </div>
          </div>
          {profileOpen && (
            <>
              <User close={close} />
            </>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
