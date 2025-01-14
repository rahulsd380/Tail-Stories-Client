import Image from "next/image";
import { ICONS } from "../../../../public";
import { useAcceptFriendRequestMutation, useDeclineFriendRequestMutation, useGetUserByIdQuery } from "@/redux/features/Auth/authApi";
import { useState } from "react";
import LoadingSpinner from "@/components/Reusable/LoadingSpinner";

const FriendRequestCard = ({ friendId } : {friendId : string}) => {
    const { data } = useGetUserByIdQuery(friendId);
    const [acceptFriendRequest, { isLoading: isAcceptingReq }] = useAcceptFriendRequestMutation();
    const [declineFriendRequest, { isLoading: isDeclingReq }] = useDeclineFriendRequestMutation();
    const [isRequestSent, setIsRequestSent] = useState(false);
    console.log(data);

    const handleAcceptFriendReq = async () => {
        try {
            const response = await acceptFriendRequest(friendId).unwrap();
            console.log(response);
            if (response?.data?.message === "Friend request accepted") {
                setIsRequestSent(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeclineFriendReq = async () => {
        try {
            const response = await declineFriendRequest(friendId).unwrap();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="bg-primary-70/40 border rounded-xl py-3 px-2 h-[260px] flex flex-col items-center justify-between">
            <div className="size-24 rounded-full">
                <Image src={data?.data?.profilePicture ? data?.data?.profilePicture : ICONS.user} alt="" width={96} height={96} className="size-24 rounded-full object-cover" />
            </div>

            <div>
                <h1 className="text-primary-10/90 text-lg font-semibold text-center">{data?.data?.name}</h1>
                <p className="text-primary-80 text-sm text-center mt-[3px]">{data?.data?.occupation ? data?.data?.occupation : "Designation Not Added"}</p>
            </div>

            <div className="flex items-center gap-3 w-full">
                {
                    !isRequestSent &&
                    <button onClick={handleDeclineFriendReq} className="px-4 py-[6px] border border-primary-20 rounded-3xl w-full text-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 font-semibold">
                        {
                            isDeclingReq ?
                            <LoadingSpinner/>
                            :
                            "Deny"
                        }
                    </button>
                }
                <button onClick={handleAcceptFriendReq} className="px-4 py-[6px] rounded-3xl w-full bg-primary-20 hover:bg-primary-20/90 text-white transition duration-300 font-semibold">
                    {
                        isAcceptingReq ?
                            <LoadingSpinner/>
                            :

                            isRequestSent ?
                                "Request Accepted"
                                :
                                "Accept"


                    }
                </button>
            </div>
        </div>
    );
};

export default FriendRequestCard;