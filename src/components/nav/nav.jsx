import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

function Nav({user}) {
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };
  return (
    <>
      <div
        className={`flex bg-gray-100 px-10 h-20 justify-between items-center`}
      >
        <div className="flex items-center gap-5">
          <img
            className="lg:block hidden"
            width="80"
            src="https://hakimi53.com/wp-content/uploads/2023/06/cropped-Hakimi-TM-Logo.png"
            alt=""
          />

          <div className="flex flex-col gap-2 text-right">
            <Link to="/" className="lg:text-2xl text-xl font-semibold">
              حکیمی هاوس
            </Link>
            <span className="text-sm">هدف ما ارامش و راحتی شماست</span>
          </div>
        </div>
        <div className="lg:hidden flex">
          <FaBars size={"2em"} className="cursor-pointer" />
        </div>
        <div className="hidden lg:flex">
          <ul className="lg:flex  items-center gap-14">
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>کرایی</button>
              <div className={styles.dropdowncontent}>
                <Link to="/rentel">
                  خانه کرایی
                  <br />
                  <span className={styles.downtext}>
                    حویلی کرایی برای فامیل ها
                  </span>
                </Link>
                <Link>
                  اطاق های کرایی
                  <br />
                  <span className={styles.downtext}>
                    اطاق های کرایی برای مهمان های خارجی و محصلین
                  </span>
                </Link>
                <Link>
                  موتر های کرایی برای اتباع خارجی
                  <br />
                  <span className={styles.downtext}>
                    موتر های کرایی برای مهمان های خارجی و اشخاصی که برای تفریح
                    به داخل کشور امدن
                  </span>
                </Link>
                <Link className={styles.last}>
                  دوکان های کرایی
                  <br />
                  <span className={styles.downtext}>
                    دوکان ها و گدام های کرایی در بهترین موقعیت های کشور
                  </span>
                </Link>
              </div>
            </li>
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>فروشی</button>
              <div className={styles.dropdowncontent}>
                <Link to="/sale">
                  خانه فروشی
                  <br />
                  <span className={styles.downtext}>
                    حویلی فروشی برای فامیل ها
                  </span>
                </Link>
                <Link>
                  زمین فروشی
                  <br />
                  <span className={styles.downtext}>
                    زمین های فروشی در تمام نقاط کشور
                  </span>
                </Link>
                <Link>
                  دوکان های فروشی
                  <br />
                  <span className={styles.downtext}>
                    دوکان های فروشی در بهترین موقعیت های کشور
                  </span>
                </Link>
                <Link className={styles.last}>
                  موتر های فروشی
                  <br />
                  <span className={styles.downtext}>
                    موتر های فروشی صفر کیلومتر و استفاده شده
                  </span>
                </Link>
              </div>
            </li>
            <li className={styles.dropdown}>
              <button className={styles.dropbtn}>گروی</button>
              <div className={styles.dropdowncontent}>
                <Link to="/moragage">
                  حویلی های گروی
                  <br />
                  <span className={styles.downtext}>
                    حویلی گروی برای فامیل ها
                  </span>
                </Link>
                <Link className={styles.last}>
                  آبارتمان های گروی
                  <br />
                  <span className={styles.downtext}>
                    آبارتمان های گروی در بهترین موقعیت های کشور
                  </span>
                </Link>
              </div>
            </li>
            <Link to={"/about-us"} className={styles.dropdown}>
              درباره ما
            </Link>
          </ul>
        </div>
        <div className="lg:flex hidden gap-5 items-center">
          {user ? (
            <>
              <Link to={"/profile"}>
                <img
                  src={user.photos[0].value}
                  className="cursor-pointer w-10 h-10 rounded-full"
                  alt=""
                />
              </Link>
              <Link
                onClick={logout}
                className="bg-gray-300 text-white px-3 py-2 rounded"
              >
                خروج از حساب
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-black border hover:border-white hover:text-white hover:bg-gray-400 border-gray-500 duration-500 px-3 py-2"
              >
                ورود به حساب
              </Link>
              <Link
                to="/sign-up"
                className="text-black border hover:border-white hover:text-white hover:bg-gray-400 border-gray-500 duration-500 px-3 py-2"
              >
                حساب جدید
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
