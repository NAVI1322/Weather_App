import { useEffect, useState } from "react";
import { WeatherData, currentWeather, fetchIcon } from "../services/weatherData";
import { useRecoilValue } from "recoil";
import { textState } from "../atom/inputfields";

export function CurrentCard() {
  const [currentData, setCurrentData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const inputBoxValue = useRecoilValue(textState)


  useEffect(() => {
    currentWeather(inputBoxValue).then((data) => {
      if (data) {
        setCurrentData(data)
      }
    })
  }, [inputBoxValue]);

  console.log(currentData)

  return (
    <div className="flex  ">
      <div className="flex flex-col m-8 bg-slate-200 border-4 border-gray-200  p-8 shadow-lg w-96 ">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <div className=" font-bold text-4xl  text-center ">
              {currentData?.name},{currentData?.sys.country}
            </div>
            <div className=" font-bold text-3xl text-center p-3">
              {currentData ? Math.round(currentData.main.temp) + "°C" : ""}
            </div>
            <div className=" font-bold text-center">
              {currentData ? currentData.weather[0].description : ""}
            </div>
            <div className="flex justify-center">
              <div className="space-x-6 items-center">
                {fetchIcon(currentData ? currentData.weather[0].icon : "")}
              </div>
            </div>
            <div className="flex flex-row space-x-6 justify-center ">
              <div className="">H:{currentData ? Math.round(currentData.main.temp_max) + "°C" : ""}</div>
              <div className="">L:{currentData ? Math.round(currentData.main.temp_min) + "°C" : ""}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}