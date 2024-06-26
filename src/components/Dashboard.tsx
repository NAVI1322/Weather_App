import { useNavigate } from "react-router-dom";
import logo from "../imgs/logo/logo.jpeg";

export function DashBoard() {


  const navigate = useNavigate()
  return (
    <div className=" md:flex md:flex-col text-neutral-800 md:h-screen hidden hover:shadow-sm  border-r border-black/   px-6  py-6 bg-blue-50 ">
      <div className="flex flex-row items-center justify-start gap-4 mb-20"> 
        <img src={logo} alt="" className="max-w-70 rounded-full" />
        <div className="text-3xl font-bold">Tenki</div>
      </div>

      <div className="p-3 mt-10 hover:shadow-sm  rounded-lg cursor-pointer ease-in duration-100 ">
        <div className="flex flex-row space-x-5 ">
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6  text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div className="text-neutral-400 text-lg font-medium hover:text-blue-300 ease-in duration-400 " onClick={()=>navigate('/')}>DashBoard</div>
        </div>
      </div>
      <div className="p-3 mt-10 hover:shadow-sm rounded-md  hover:bg-blue-50 ease-in-out duration-300 cursor-pointer">
        <div className="flex flex-row space-x-5">
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </div >
          <div className="text-neutral-400 text-lg font-medium  hover:text-blue-300 ease-in duration-400" onClick={()=>navigate('/team')}>Team </div>
        </div>
      </div>
      
    </div>
  );
}
