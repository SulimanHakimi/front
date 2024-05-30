import React from "react";
import Recent from "../recentItems/recent";
import { Link } from "react-router-dom";

function Home(user) {
  return (
    <div>
      <div className="user-select-none">
        <div className="lg:h-[500px] h-fit bg-center bg-cover">
          <div className="flex flex-col h-[850px] lg:h-fit lg:flex-row w-full justify-center">
            <div className="lg:w-1/2 w-full h-1/2 lg:h-[500px] flex flex-col justify-center gap-5 px-5 lg:px-10">
              <h1 className="text-4xl leading-[1.5em] font-semibold">
                حکیمی هاوس
              </h1>
              <span className="text-2xl">
                جوابگو تمام احتیاجات شما از پیدا کردن خانه دوکان زمین و موتر الی
                گرفتن سند شان تا اخرین مرحله همکار با شماست
              </span>
              <Link
                to={"/login"}
                className="rounded-md w-fit text-white px-5 py-3 bg-black hover:bg-opacity-50 font-semibold"
              >
                با ما بپیوندید
              </Link>
            </div>
            <div className="lg:w-1/2 w-full h-1/2 lg:h-[500px] flex flex-col">
              <div className="flex justify-center items-center h-2/4">
                <h2 className="text-3xl font-semibold">
                  جستجو به اساس احتیاجات شما
                </h2>
              </div>
              <form
                action=""
                className="flex h-3/4 gap-5 items-center flex-col"
              >
                <div className="flex items-center flex-row-reverse">
                  <input
                    className="border-l border-y outline-none px-2 w-64 h-12 rounded-l"
                    type="text"
                    name=""
                    id=""
                  />
                  <i className="fa-solid fa-magnifying-glass p-4 bg-white rounded-r border cursor-pointer"></i>
                </div>
                <div className="flex gap-5">
                  <select
                    name=""
                    id=""
                    className="p-3 text-md border outline-none"
                  >
                    <option value="">کتگوری</option>
                    <option value="Rentel">کرایی</option>
                    <option value="sell">فروشی</option>
                    <option value="Grawi">گرویی</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="p-3 text-md w-fit border outline-none"
                  >
                    <option value="">ولایت</option>
                    <option value="Badakhshan">بدخشان</option>
                    <option value="Badghis">بادغیس</option>
                    <option value="Baghlan">بغلان</option>
                    <option value="Balkh">بلخ</option>
                    <option value="Bamyan">بامیان</option>
                    <option value="Daykundi">بادغیس</option>
                    <option value="Farah">فراه</option>
                    <option value="Faryab">فاریاب</option>
                    <option value="Ghazni">غزنی</option>
                    <option value="Ghor">غور</option>
                    <option value="Helmand">هلمند</option>
                    <option value="Herat">هرات</option>
                    <option value="Jowzjan">جوزجان</option>
                    <option value="Kabul">کابل</option>
                    <option value="Kandahar">کندهار</option>
                    <option value="Kapisa">کاپیسا</option>
                    <option value="Khost">خوست</option>
                    <option value="Kunar">کنر</option>
                    <option value="Kunduz">کندز</option>
                    <option value="Laghman">لغمان</option>
                    <option value="Logar">لوگر</option>
                    <option value="Nangarhar">ننگرهار</option>
                    <option value="Nimruz">نیمروز</option>
                    <option value="Nuristan">نورستان</option>
                    <option value="Paktia">پکتیا</option>
                    <option value="Paktika">پکتیکا</option>
                    <option value="Panjshir">پنجشیر</option>
                    <option value="Parwan">پروان</option>
                    <option value="Samangan">سمنگان</option>
                    <option value="Sar-e Pol">سرپل</option>
                    <option value="Takhar">تخار</option>
                    <option value="Uruzgan">ارزگان</option>
                    <option value="Wardak">وردک</option>
                    <option value="Zabul">زابل</option>
                  </select>
                </div>
                <div className="flex gap-5">
                  <select
                    name=""
                    id=""
                    className="p-3 w-fit text-md border outline-none"
                  >
                    <option value="">تعداد اطاق</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="+3">+3</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="p-3 w-fit text-md border outline-none"
                  >
                    <option>نوع</option>
                    <option value="House">خانه</option>
                    <option value="Shope">دوکان</option>
                    <option value="Car">موتر</option>
                    <option value="Apartman">اپارتمان</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="p-3 text-md w-fit border outline-none"
                  >
                    <option value="">مدل موتر</option>
                    <option value="Toyota">تویتا</option>
                    <option value="Shope">لکسس</option>
                    <option value="Suzuki">سوزوکی</option>
                    <option value="Ford">فورد</option>
                    <option value="BMW">بی ام دبلیو</option>
                    <option value="Land Rover">لند رور</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        {user.user ? <Recent /> : <></>}
      </div>
    </div>
  );
}

export default Home;
