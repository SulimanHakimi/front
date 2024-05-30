import React from "react";

function Login() {
  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:4000/auth/facebook", "_self");
  };

  return (
    <>
      <div className="flex justify-center items-center h-fit">
        <div className="w-full flex flex-col justify-evenly p-16 bg-white">
          <div className="">
            <h1 className="font-bold text-3xl">سلام خوش امدید به حکیمی هاوس</h1>
            <div className="flex items-center gap-1">
              <p>برای ورود به حساب یک طریقه انتخاب کنید</p>{" "}
              <a className="text-lg underline text-blue-400" href="/sign-up">
                ایجاد حساب
              </a>
            </div>
          </div>
          <div className="flex flex-col my-5 w-3/3">
            <input
              type="email"
              className="rounded-md my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="ایمیل"
            />
            <input
              type="password"
              className="rounded-md my-3 border px-4 py-3 focus:border-slate-500 outline-none "
              placeholder="گذرواژه"
            />
          </div>
          <div className="flex justify-between items-center ">
            <p className="w-1/6 text-xl">یا توسط</p>
            <span className="h-[1px] w-5/6 bg-[#D9D9D9]"></span>
          </div>
          <div className="flex justify-center gap-10 my-4">
            <button className="py-2 px-5" onClick={google}>
              <i className="fa-brands fa-google hover:scale-125 duration-500 fa-3x"></i>
            </button>
            <button className="py-2 px-5">
              <i className="fa-brands fa-apple hover:scale-125 duration-500 fa-3x"></i>
            </button>
            <button className="py-2 px-5" onClick={facebook}>
              <i className="fa-brands fa-facebook hover:scale-125 duration-500 fa-3x"></i>
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
