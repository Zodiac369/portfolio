import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { SiAngular } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSymfony } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-t border-neutral-700 pb-24">
        <h2 className="my-20 text-center text-4xl">Mes Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAngular className="text-7xl text-red-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSymfony className="text-7xl"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoNodejs  className="text-7xl text-green-500"/>
            </div>
        </div>
    </div>
  );
};

export default Technologies