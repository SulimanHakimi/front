import React from "react";
import { Link } from "react-router-dom";

function CarsCard({data}) {
  return (
    <div className="card relative max-h-[360px] shadow w-80 lg:w-72 bg-white rounded overflow-hidden">
      <div className="h-[190px]">
        <img className="object-cover w-full h-full" src={data.image} alt="" />
        <span
          className={`absolute ${
            data.isSold ? "bg-red-500" : "bg-green-500"
          } top-2 right-2 text-white  px-2 rounded`}
        >
          {data.isSold ? "فروخته شده" : "فعال"}
        </span>
      </div>
      <div className="h-[170px] p-2 flex flex-col gap-2 justify-between">
        <h2 className="font-semibold text-lg">{data.Price} افغانی</h2>
        <ul className="flex items-center gap-3">
          <li className="flex items-center">
            <span className="">{data.name}</span>
          </li>
          <li className="flex items-center gap-1">
            <i className="fa-solid fa-droplet fa-sm"></i>
            <span>{data.color}</span>
          </li>
        </ul>
        <span className="text-sm">
          <strong>آدرس: </strong>
          {data.adress}
        </span>
        <Link
          to={`/car/${data.id-1}`}
          className="px-4 py-2 rounded text-center bg-slate-100"
        >
          جزيیات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default CarsCard;
