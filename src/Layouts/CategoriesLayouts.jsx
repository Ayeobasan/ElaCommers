import { Outlet, NavLink, Link } from "react-router-dom";

export const CategoriesLayouts = () => {
  const Stuff = [
    {
      id: 1,
      name: "MainFood",
      to: "MainFood",
    },
    {
      id: 2,
      name: "Soup-spices",
      to: "Spices",
    },
    {
      id: 3,
      name: "Snacks",
      to: "Snacks",
    },
  ];
  return (
    <div className="items-center">
      <section className="bg-[url('https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=3840&q=75')] bg-no-repeat bg-center text-center h-[100vh] w-full">
        <div className="flex justify-center items-center h-full">
          <div className="xd:w-[60%] space-y-10">
            <p className=" text-3xl font-bold  capitalize w-[90%] text-center">
              Groceries Delivered at the shortest time you can think of{" "}
            </p>
            <p>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
            <div className=" shadow-2xl flex h-[3rem] items-center ">
              <input
                className="w-full bg-white rounded-l-md  pl-5 h-[3rem] outline-none "
                type="search"
                name=""
                placeholder="The search box is your's"
                id=""
              />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-[3rem] flex justify-center text-white rounded-r-md w-[20%]">
                <button type="submit">Search</button>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex ">
        <div>
          {Stuff.map((cate, index) => (
            <>
              <div key={index}>
                <NavLink to={cate?.to}>{cate?.name}</NavLink>
              </div>
            </>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
