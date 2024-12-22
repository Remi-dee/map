import Image from "next/image";
import Map1 from "@/app/assets/logo/vector.svg";
import Map2 from "@/app/assets/logo/vector1.svg";
import Map3 from "@/app/assets/logo/vector2.svg";

export default function Logo() {
  return (
    <div className="flex items-center  p-4 rounded-lg">
      {/* MAP Logo SVGs */}
      <div className="flex gap-2">
        <Image src={Map1} alt="Profile" className="w-[54px] h-auto  " />
        <Image src={Map2} alt="Profile" className="w-10 h-auto  " />
        <Image src={Map3} alt="Profile" className="w-10 h-auto  " />
      </div>
      {/* Text */}
      <div className="ml-4">
        <p className="text-[#141460] text-lg font-medium leading-tight">
          Medical Advanced
        </p>
        <p className="text-[#141460] text-lg font-medium">Platform</p>
      </div>
    </div>
  );
}
