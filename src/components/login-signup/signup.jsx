import React from "react";

function Signup() {
  return (
    <>
      <div className="flex justify-center bg-slate-200 items-center min-h-screen">
        <div className="w-[485px] flex flex-col justify-around my-10 px-10 py-10 shadow-lg rounded bg-white h-4/5">
          <div className="">
            <h1 className="font-bold text-2xl">سلام خوش امدید به حکیمی هاوس</h1>
            <div className="flex items-center gap-1">
              <p>برای ورود به حساب یک طریقه انتخاب کنید</p>{" "}
              <a className="text-sm underline text-blue-400" href="/login">
                ورود با حساب
              </a>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <input
              type="text"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="اسم"
            />
            <input
              type="text"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="تخلص"
            />
            <input
              type="email"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="ایمیل"
            />
            <input
              type="password"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="گذرواژه"
            />
            <input
              type="password"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="تایید گذرواژه"
            />

            <div className="flex items-center justify-between">
              <label for="userType">نوع حساب</label>
              <select id="userType" className="outline-none border px-3 py-2">
                <option value="Normal User">کاربر عادی</option>
                <option value="saab">فروشنده</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="w-2/5">یا توسط</p>
            <span className="h-[1px] w-3/5 bg-[#D9D9D9]"></span>
          </div>
          <div className="flex justify-evenly my-4">
            <button className="py-2 px-5">
              <i className="fa-brands fa-google fa-3x"></i>
            </button>
            <button className="py-2 px-5">
              <i className="fa-brands fa-apple fa-3x"></i>
            </button>
            <button className="py-2 px-5">
              <i className="fa-brands fa-facebook fa-3x"></i>
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="py-3 w-full text-white bg-gray-700 rounded-md">
              ایجاد
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
