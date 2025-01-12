import Image from "next/image";
import { FaAddressCard } from "react-icons/fa6";
import { IMAGES } from "../../../../public";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { IoDocumentTextOutline } from "react-icons/io5";

const GroupCard = () => {
    return (
        <div className="bg-primary-70/40 border rounded-xl flex flex-col justify-between h-[315px]">
            <div className="relative">
                <div className="relative">
                    <Image src={IMAGES.img2} alt="" className="w-full rounded-t-xl h-[180px] object-cover" />
                    <div className="size-28 rounded-full bg-white flex items-center justify-center absolute -bottom-[66px] left-3">
                        <Image src={IMAGES.img2} alt="" className="size-[105px] rounded-full object-cover" />
                    </div>
                </div>

                <div className="absolute left-[140px] -bottom-14">
                    <h1 className="text-primary-10/90 text-lg font-semibold">React.JS Developer Community</h1>
                    <p className="text-primary-80 text-sm mt-[3px]">Frontend Developer || Future Software Engineer</p>
                </div>
            </div>
            <div className="p-4 mt-8">
                {/* <div className="flex items-center justify-center gap-5">
                <div className="flex items-center justify-center gap-1 text-primary-10/80">
                    <MdOutlinePeopleAlt className="text-primary-20/80 text-xl" />
                    100K
                </div>
                <div className="flex items-center justify-center gap-1 text-primary-10/80">
                    <IoDocumentTextOutline className="text-primary-20/80 text-xl" />
                    10K
                </div>
            </div> */}

                <button className="flex items-center gap-2 px-4 py-[6px] justify-center rounded-3xl w-full bg-primary-20 hover:bg-primary-20/80 text-white transition duration-300 font-semibold">
                    <FaAddressCard />
                    Join
                </button>
            </div>
        </div>
    );
};

export default GroupCard;