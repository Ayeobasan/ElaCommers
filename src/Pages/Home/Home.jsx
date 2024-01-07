import React, { useMemo, useState } from "react";
import Slider from "../../Components/Hero/Slider";
import Order from "../../Components/Hero/Order";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [filter, setFilter] = useState("");

  const search = useSelector((state) => state);

  // console.log(search);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    if (event.target.value) {
      const searchText = event.target.value;
      const matchedJobs = search.data.filter((data) =>
        data.filteredTitle.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(handleSearch(matchedJobs));
    }
  };

  return (
    <div className=" bg-[rgb(244,245,247)]">
      <section className="bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=3840&q=75')] bg-cover   text-center h-[100vh] w-full">
        <div className="flex justify-center items-center h-[90vh] xs:h-full">
          <div className="w-[95%] md:w-[80%] text-center xd:w-[60%] space-y-10">
            <p className=" w-[95%] md:w-[90%] m-auto text-xl xs:text-3xl font-bold  capitalize text-center">
              Groceries Delivered at the shortest time you can think of{" "}
            </p>
            <p>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
            <div className=" w-[90%] xs:w-[90%] xd:w-full shadow-2xl m-auto flex h-[2.5rem] xs:h-[3rem] items-center ">
              <input
                onChange={handleSearch}
                className=" placeholder:text-sm w-[90%] xs:w-[90%] md:w-full bg-white rounded-l-md h-[2.5rem] pl-5 xs:h-[3rem] outline-none "
                type="search"
                name=""
                placeholder="The search box is your's"
                id=""
              />
              <span
                className="  bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500
               h-[2.5rem] xs:h-[3rem] flex justify-center text-white rounded-r-md w-[30%] md:w-[20%] text-xs xs:text-base"
              >
                <button type="submit">Search</button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      {/* <Order/> */}
      {/* <Categories/> */}
      <Product />
    </div>
  );
};

export default Home;
