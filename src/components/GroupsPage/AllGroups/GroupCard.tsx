"use client"
import { TLoggedInUser } from "@/components/Home/Navbar/Navbar";
import LoadingSpinner from "@/components/Reusable/LoadingSpinner";
import { useJoinGroupMutation } from "@/redux/features/Auth/authApi";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { FaAddressCard } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";

type TGroupCard = {
    _id: string;
    name: string;
    logo: string;
    coverImage: string;
    tagline: string;
    members : string[];
};

const GroupCard: React.FC<TGroupCard> = ({ _id, name, tagline, logo, coverImage, members }) => {
    const user = useAppSelector(selectCurrentUser) as TLoggedInUser;
    const [joinGroup, { isLoading: isJoiningGroup }] = useJoinGroupMutation();
    const [isJoined, setIsJoined] = useState(false);

    const handleJoinGroup = async () => {
        try {
            const response = await joinGroup(_id).unwrap();
            console.log(response);
            if (response?.message === "Successfully joined the group") {
                setIsJoined(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const isMemberJoined = members?.some(id => id === user?.userId);

    return (
        <div className="bg-primary-70/40 border rounded-xl flex flex-col justify-between h-[315px]">
            <div className="relative">
                <div className="relative">
                    <img
                        src={coverImage}
                        alt=""
                        className="w-full rounded-t-xl h-[180px] object-cover"
                    />
                    <div className="bg-primary-20 bg-opacity-80 rounded-3xl w-16 px-3 py-1 text-center text-white absolute top-2 right-2 text-xs flex items-center gap-2">
                   <TbUsers className="text-[17px]" /> {members?.length}
                    </div>
                    <div className="size-28 rounded-full bg-white flex items-center justify-center absolute -bottom-[66px] left-3">
                        <img
                            src={logo}
                            alt=""
                            className="size-[105px] rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className="absolute left-[140px] -bottom-14">
                    <h1 className="text-primary-10/90 text-lg font-semibold">{name}</h1>
                    <p className="text-primary-80 text-sm mt-[3px]">{tagline}</p>
                </div>
            </div>
            <div className="p-4 mt-8">
                <button onClick={handleJoinGroup} className="flex items-center gap-2 px-4 py-[6px] justify-center rounded-3xl w-full bg-primary-20 hover:bg-primary-20/80 text-white transition duration-300 font-semibold">
                    {
                        isJoiningGroup ?
                            <LoadingSpinner />
                            :
                            isJoined ?
                                "Joined"
                                :
                                isMemberJoined?
                                "Joined"
                                    :
                                    <span className="flex items-center gap-2"><FaAddressCard />
                                    Join</span>
                    }
                </button>
            </div>
        </div>
    );
};

export default GroupCard;
