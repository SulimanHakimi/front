import React from "react";
import { Link } from "react-router-dom";

function HouseCard(data) {
  return (
    <div className="card relative max-h-[360px] shadow-lg w-72 bg-white rounded-lg overflow-hidden">
      <div className="h-[190px]">
      <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: `url(${data.data.image})` }}

        ></div>
        <div className="absolute top-2 right-2 flex gap-2">  
        <span className="bg-gray-400 text-red px-2 rounded">
          {data.data.type}
        </span>
        <span className={`text-white ${data.data.isSold?"bg-red-500":"bg-green-500"} px-2 rounded`}>
           {data.data.isSold?"غیر فعال":"فعال"}
        </span>
        </div>
      </div>
      <div className="h-[170px] p-2 flex flex-col justify-between">
        <h2 className="font-semibold text-lg">{data.data.Price} افغانی</h2>
        <ul className="flex items-center gap-3">
          <li className="flex items-center gap-1">
            <i className="fa-solid fa-house fa-sm"></i> <span>{data.data.rooms} اطاق</span>
          </li>
          <li className="flex items-center gap-1">
            <i className="fa-solid fa-bath fa-sm"></i> <span>{data.data.baths} تشناب</span>
          </li>
          <li className="flex items-center gap-1">
            <i className="fa-solid fa-ruler fa-sm"></i> <span>{data.data.area} مساحت</span>
          </li>
        </ul>
        <span className="text-sm">
          <strong>آدرس:</strong>{data.data.adress}
        </span>
        <Link to={`/house/${data.data.id}`} className="px-4 text-center py-2 rounded bg-slate-100">جزيیات بیشتر</Link>
      </div>
    </div>
  );
}

export default HouseCard;
