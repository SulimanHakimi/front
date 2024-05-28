import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
function Nav(user) {
  const logout = () => {
    window.open("https://back-jade-eight.vercel.app/auth/logout", "_self");
  };
  return (
    <>
      <div
        className={`flex bg-gray-100 px-10 h-20 justify-between items-center`}
      >
        <div className="flex items-center gap-5">
          <img
            width="80"
            src="https://hakimi53.com/wp-content/uploads/2023/06/cropped-Hakimi-TM-Logo.png"
            alt=""
          />

          <div className="flex flex-col gap-2 text-right">
            <Link to="/" className="text-2xl font-semibold">
              حکیمی هاوس
            </Link>
            <span className="text-sm">هدف ما ارامش و راحتی شماست</span>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-14">
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
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          {user.user ? (
            <>
          <img src={user.user.photos[0].value} className="cursor-pointer w-10 h-10 rounded-full" alt="" />
            <Link
              onClick={logout}
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              خروج از حساب
            </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-500 text-white px-3 py-2 rounded-lg"
              >
                ورود به حساب
              </Link>
              <Link
                to="/sign-up"
                className="bg-green-500 text-white px-3 py-2 rounded-lg"
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
