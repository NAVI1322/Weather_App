import { useEffect, useState } from "react";
import { ClimateData, forecastWeather } from "../services/weatherData";
import { useRecoilValue } from "recoil";
import { textState } from "../atom/inputfields";

export const GridItems = () => {
  const [weather, setWeather] = useState<ClimateData | null>(null);
  const inputBoxValue = useRecoilValue(textState);
  useEffect(() => {
    forecastWeather(inputBoxValue).then((data) => {
      if (data) {
        setWeather(data);
        console.log(data);
      }
    });
  }, [inputBoxValue]);

  return (
    <div className="grid grid-cols-2 col-span-2 w-[610px] gap-5">
      <div className="h-[170px] w-[290px] rounded-xl bg-blue-100 font-semibold flex flex-col pl-6 pt-4 gap-4">
        <div className=" font-medium text-[18px]">{"Wind"}</div>
        <div className=" font-medium text-slate-400">{"Today wind speed"}</div>
        <div>{weather?.list[0].speed}km/h</div>
      </div>
      <div className="h-[170px] w-[290px] rounded-xl bg-blue-100 font-semibold flex flex-col pl-6 pt-4 gap-4 ">
        <div className=" font-medium text-[18px]">{"Humidity"}</div>
        <div className=" font-medium text-slate-400">{"Today humidity"}</div>
        <div>{weather?.list[0].humidity}%</div>
      </div>
      <div className="h-[170px] w-[290px] rounded-xl bg-blue-100 font-semibold flex flex-col pl-6 pt-4 gap-4">
        <div className=" font-medium text-[18px]">{"Pressure"}</div>
        <div className=" font-medium text-slate-400">{"Today Pressure"}</div>
        <div>{(weather?.list[0].pressure)}mBar</div>
      </div>
      <div className="h-[170px] w-[290px] rounded-xl bg-blue-100 font-semibold flex flex-col pl-6 pt-4">
        <div className=" font-medium text-[18px] ">{"Today Temperatures"}</div>
        <div className=" pt-1 grid grid-cols-2 gap-2">
          <div><p className=" text-slate-400">Morning</p>{weather&&Math.round(weather?.list[0].temp.morn)}°C</div>
          <div><p className=" text-slate-400">Day</p>{weather&&Math.round(weather?.list[0].temp.day)}°C</div>
          <div><p className=" text-slate-400">Eve</p>{weather&&Math.round(weather?.list[0].temp.eve)}°C</div>
          <div><p className=" text-slate-400">Night</p>{weather&&Math.round(weather?.list[0].temp.night)}°C</div>
        </div>
      </div>
    </div>
  );
};