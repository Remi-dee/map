import Image from "next/image";
import Header from "./Components/Header";
import Carousel from "./Components/carousel/Carousel";
import BarChart from "./Components/BarChart";
import EventHistory from "./Components/EventHistory";
import Sidebar from "./Components/SideBar";

export default function Home() {
  return (
    <div className="min-h-screen flex pt-0 px-[20px] lg:p-0 w-full p-2 font-inter gap-[28px] ">
      <Sidebar />

      <main className="">
        <Header />
        <div className="mt-[34px] mb-[28px] ">
          <h1 className="text-xl font-medium leading-5 text-left mb-[12px]  lg:mb-[14px]">
            Event Registrations per month
          </h1>
          <div className="flex-col  flex lg:flex-row lg:justify-between w-full lg:gap-20">
            <BarChart />
            <Carousel />
          </div>
          <EventHistory />
        </div>
      </main>
    </div>
  );
}
