import React from "react";

function Signup() {
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  return (
    <>
      <div className="flex items-center h-fit">
        <div className="w-full flex flex-col justify-around p-16 rounded bg-white">
          <div className="">
            <h1 className="font-bold text-3xl">سلام خوش امدید به حکیمی هاوس</h1>
            <div className="flex items-center gap-1">
              <p>برای ورود به حساب یک طریقه انتخاب کنید</p>{" "}
              <a className="text-lg underline text-blue-400" href="/login">
                ورود با حساب
              </a>
            </div>
          </div>
          <div className="flex flex-col my-10">
            <div className="flex gap-10 ">
              <input
                type="text"
                className="rounded-md w-96 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
                placeholder="اسم"
              />
              <input
                type="text"
                className="rounded-md w-80 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
                placeholder="تخلص"
              />
            </div>
            <div className="flex gap-10 items-center">
              <input
                type="email"
                className="rounded-md w-80 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
                placeholder="ایمیل"
              />
              <input
                type="password"
                className="rounded-md w-80 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
                placeholder="گذرواژه"
              />
              <input
                type="password"
                className="rounded-md w-80 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
                placeholder="تایید گذرواژه"
              />
                <select id="userType" className="outline-none border h-fit py-2 px-3">
                  <option value="Normal User">کاربر عادی</option>
                  <option value="saab">فروشنده</option>
                </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="h-[1px] w-full bg-[rgb(217,217,217)]"></span>
          </div>
          <div className="flex justify-center gap-10 my-4">
            <button className="py-2 px-5" onClick={google}>
              <i className="fa-brands fa-google hover:scale-125 duration-500 fa-3x"></i>
            </button>
            <button className="py-2 px-5">
              <i className="fa-brands fa-apple hover:scale-125 duration-500 fa-3x"></i>
            </button>
            <button className="py-2 px-5">
              <i className="fa-brands fa-facebook hover:scale-125 duration-500 fa-3x"></i>
            </button>
          </div>
          <div className="w-full flex justify-center">
            <button className="py-4 w-full text-white text-lg bg-gray-700 rounded-md">
               ایجاد حساب
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
