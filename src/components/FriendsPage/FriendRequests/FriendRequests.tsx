/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import { Dispatch, SetStateAction } from "react";
import { useGetMeQuery } from "@/redux/features/Auth/authApi";
import FriendRequestCard from "./FriendRequestCard";

const FriendRequests = ({ friendTab, setFriendTab }: { friendTab: "All Friends" | "Friend Requests", setFriendTab: Dispatch<SetStateAction<"All Friends" | "Friend Requests">> }) => {
    const { data: me } = useGetMeQuery({});
    const receivedRequests = me?.data?.friendReq?.received || [];
    console.log(receivedRequests);

    return (
        <FriendPageContainer title="Friend Requests" grid="grid-cols-3" friendTab={friendTab} setFriendTab={setFriendTab} isTabVisible={true}>
            {
                receivedRequests?.length < 1 ?
                <p>No request received</p>
                :
                receivedRequests.map((req:any) => (
                    <FriendRequestCard
                        key={req.friendId}
                        {...req}
                    />
                ))
            }
        </FriendPageContainer>
    );
};

export default FriendRequests;
