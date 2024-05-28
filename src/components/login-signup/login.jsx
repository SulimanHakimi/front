import React from "react";

function Login() {
  const google = () => {
    window.open("https://back-5uqh7ujxq-sulimanhakimis-projects.vercel.app/auth/google", "_self");
  };

  return (
    <>
      <div className="flex justify-center bg-slate-200 items-center min-h-screen">
        <div className="w-[485px] flex flex-col justify-evenly gap-2 px-14 py-10 shadow-lg rounded bg-white min-h-4/5">
          <div className="">
            <h1 className="font-bold text-2xl">سلام خوش امدید به حکیمی هاوس</h1>
            <div className="flex items-center gap-1">
              <p>برای ورود به حساب یک طریقه انتخاب کنید</p>{" "}
              <a className="text-sm underline text-blue-400" href="/sign-up">
                ایجاد حساب
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="ایمیل"
            />
            <input
              type="password"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none "
              placeholder="گذرواژه"
            />
          </div>
          <div className="flex justify-between items-center ">
            <p className="w-2/5">یا توسط</p>
            <span className="h-[1px] w-3/5 bg-[#D9D9D9]"></span>
          </div>
          <div className="flex justify-evenly my-4">
            <button
              className="py-2 px-5 flex items-center gap-5"
              onClick={google}
            >
              <span className="text-xl">ورود با حساب گوگل</span>
              <i className="fa-brands fa-google fa-3x"></i>
            </button>
          </div>
          <div className="w-full flex justify-center ">
            <button className="py-3 w-full text-white bg-gray-700 rounded-md">
              ورود
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
