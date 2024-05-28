import React from "react";
import CarsCard from "../cards/carsCard";
import HouseCard from "../cards/houseCard";
import house from "../assets/database/house";
import cars from "../assets/database/cars";
function Recent() {
  return (
    <>
      <div className="flex flex-col my-10 justify-center items-center px-10">
        <h1 className="leading-[3em] text-4xl">خانه های اخیر</h1>
        <div className="card-list min-h-screen grid gap-5 my-5 w-full grid-cols-4  justify-items-center">
          {house.map((h) => (
            <HouseCard key={h.id} data={h} />
          ))}
        </div>
      </div>
      <div className="flex flex-col my-10 justify-center items-center px-10">
        <h1 className="leading-[3em] text-4xl">موتر های اخیر</h1>
        <div className="card-list min-h-screen my-5 grid gap-5 w-full grid-cols-4  justify-items-center">
          {cars.map((car) => (
            <CarsCard key={car.id} data={car} />

          ))}
        </div>
      </div>
    </>
  );
}

export default Recent;
