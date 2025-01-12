import Image from "next/image";
import { IMAGES } from "../../../../public";
import { IoPersonAdd } from "react-icons/io5";

type TFriendCard = {
    variant : "Friend" | "Friend Request"
}
const FriendCard:React.FC<TFriendCard> = ({variant}) => {
    return (
        <div className="bg-primary-70/40 border rounded-xl py-3 px-2 h-[260px] flex flex-col items-center justify-between">
            <div className="size-24 rounded-full ">
                <Image src={IMAGES.img2} alt="" className="size-24 rounded-full object-cover" />
            </div>

            <div className="">
                <h1 className="text-primary-10/90 text-lg font-semibold text-center">Rahul Sutradhar</h1>
                <p className="text-primary-80 text-sm text-center mt-[3px]">Frontend Developer || Future Software Engineer</p>
            </div>
           {
            variant === "Friend" ?
            <button className="flex items-center gap-2 px-4 py-[6px] border border-primary-20 justify-center rounded-3xl w-full text-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 font-semibold">
            <IoPersonAdd />
            Connect
        </button>
        :
        <div className="flex items-center gap-3 w-full">
        <button className="px-4 py-[6px] border border-primary-20 rounded-3xl w-full text-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 font-semibold">
            Deny
        </button>
        <button className="px-4 py-[6px] rounded-3xl w-full bg-primary-20 hover:bg-primary-20/90 text-white transition duration-300 font-semibold">
            Accept
        </button>
        </div>
           }
        </div>
    );
};

export default FriendCard;