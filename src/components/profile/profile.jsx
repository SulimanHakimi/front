import React from "react";
import Footer from "../footer/footer";

function Profile({ user }) {
  return (
    <div>
      <div class="w-full min-h-screen bg-white text-gray-900">
        <div class="h-36 overflow-hidden ">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 lg:w-40 lg:h-40 relative -mt-20 border-4  border-white rounded-full overflow-hidden">
          <img
            class="object-cover object-center h-32 lg:h-40"
            src={user.photos[0].value}
            alt=""
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold text-xl">{user.displayName}</h2>
        </div>
        <ul class="py-6 mt-2 w-full  text-gray-700 flex items-center justify-evenly">
          <li class="flex flex-col items-center justify-around">
            <div>0</div>

            <span className="font-semibold">دنبال شده</span>
          </li>
          <li class="flex flex-col items-center justify-between">
            {" "}
            <div>0</div>
            <span className="font-semibold">دنبال کننده ها</span>
          </li>

          <li class="flex flex-col items-center justify-around">
            <div>0</div>
            <span className="font-semibold">پسند ها</span>
          </li>
        </ul>
        <div className="min-h-96 w-full lg:px-24 px-5 grid lg:gap-0 gap-2 grid-cols-2 lg:grid-cols-5 my-10 justify-items-center">
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500  bg-[url('https://maskanyab.af/wp-content/uploads/2024/05/Four-room-house-for-sale-in-Qala-e-Khatir-Kabul-4-592x444.jpg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500 bg-[url('https://www.azadbazar.af/Images/Sell/1080306960.jpeg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500 bg-[url('https://www.azadbazar.af/Images/Sell/2572636704.jpg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500 bg-[url('https://maskanyab.af/wp-content/uploads/2024/05/Six-room-house-for-sale-in-District-6-Kabul-459x444.jpg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500 bg-[url('https://maskanyab.af/wp-content/uploads/2024/05/Six-room-house-for-sale-in-District-6-Kabul-459x444.jpg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105 duration-500 bg-[url('https://maskanyab.af/wp-content/uploads/2024/05/Six-room-house-for-sale-in-District-6-Kabul-459x444.jpg')]"></div>
          <div className="lg:w-64 w-56 h-64 lg:h-80 border bg-cover object-cover cursor-pointer lg:hover:scale-105  duration-500 bg-[url('https://maskanyab.af/wp-content/uploads/2024/05/Three-room-house-for-sale-in-Qasaba-Kabul-592x444.jpg')]"></div>
        </div>
      </div>
      <Footer/>

    </div>
  );
}

export default Profile;
