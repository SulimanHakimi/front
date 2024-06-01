import { useParams } from "react-router";
import cars from "../assets/database/cars";

export default function CarsDatils() {
  const param = useParams();
  const data = cars[param.id];

  return (
    <div className="text-white absolute min-h-[530px] w-full ">
      <div className="text-[#242424] flex w-full">
        <div className="w-1/2">
          <img className="object-cover w-full h-[530px]" src={data.image} alt="" />
          <span
            className={`absolute ${
              data.isSold ? "bg-red-500" : "bg-green-500"
            } top-2 right-2 text-white  px-2 rounded`}
          >
            {data.isSold ? "sold" : "active"}
          </span>
        </div>
        <div className="w-1/2 flex flex-col h-[530px] justify-between p-5">
          <div className="flex justify-center gap-8">
            <span className="font-semibold text-3xl">{data.name}</span>
          </div>
          <ul className="flex list-disc flex-col my-10 gap-3 px-5">
              <li className="text-xl">{data.Price}افغانی</li>
            <li className="text-xl">{data.color}</li>
            <li className="text-xl">{data.Plate}</li>
            <li className="text-xl">{data.engine}</li>
          </ul>
          <div className="flex flex-col gap-3">
            <span className="text-xl">
              <strong className="font-semibold">اسم فروشنده: </strong>
              {data.SellerName}
            </span>
            <span className="text-xl">
              <strong className="font-semibold">شماره فروشنده: </strong>
              {data.PhoneNo}
            </span>
            <div className="">
              <span className="text-xl">
                <strong>آدرس: </strong>
                {data.adress}
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
