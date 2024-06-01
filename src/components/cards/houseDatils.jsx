import { useParams } from "react-router";
import house from "../assets/database/house";

export default function HouseDatils() {
  const param = useParams();
  const data = house[param.id];

  return (
    <div className="text-white absolute w-full">
      <div className="text-[#242424] flex w-full">
        <div className="h-full w-1/2">
          <img
            className="object-center w-full h-[530px]"
            src={data.image}
            alt=""
          />
          <span
            className={`absolute ${
              data.isSold ? "bg-red-500" : "bg-green-500"
            } top-2 right-2 text-white  px-2 rounded`}
          >
            {data.isSold ? "غیر فعال" : "فعال"}
          </span>
        </div>
        <div className="p-5 w-1/2 flex flex-col justify-around">
          <h2 className="font-semibold text-2xl text-center">{data.type}</h2>

          <ul className="flex px-5 flex-col list-disc my-10 gap-3">
            <li className="text-xl">{data.Price}افغانی</li>
            <li className="text-xl">{data.rooms} اطاق</li>
            <li className="text-xl">{data.baths}تشناب</li>
            <li className="text-xl">{data.area}مساحت</li>
            <li className="text-xl"> 3 آشپزخانه</li>
          </ul>
          <div className="flex flex-col gap-5">
            {" "}
            <span className="text-xl">
              <strong>آدرس: </strong>
              {data.adress}
            </span>
            <span className="text-xl">
              <strong className="font-semibold">شماره فروشنده: </strong>
              {data.PhoneNo}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
