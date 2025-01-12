"use client"
import Container from "@/components/Container/Container";
import Profile from "../_components/Profile/Profile";
import People from "@/components/Home/People/People";
import AllFriends from "@/components/FriendsPage/AllFriends/AllFriends";
import SuggestedFriends from "@/components/FriendsPage/SuggestedFriends/SuggestedFriends";
import YouMayKnow from "@/components/FriendsPage/YouMayKnow/YouMayKnow";
import { useState } from "react";
import FriendRequests from "@/components/FriendsPage/FriendRequests/FriendRequests";

const Friends = () => {
    const [friendTab, setFriendTab] = useState("Friend Requests");
    return (
        <Container>
            <div className="flex mt-5 gap-5 font-Lato h-[calc(100vh-40px)]">
                <div className="w-[25%] overflow-y-auto scrollbar-hide hidden lg:flex flex-col gap-4">
                    <Profile />
                    <People />
                </div>
                <div className="w-[75%] flex flex-col gap-5 overflow-y-auto scrollbar-hide">
                    {
                        friendTab === "Friend Requests" ?
                        <FriendRequests />
                        :
                        <AllFriends />
                    }
                    <SuggestedFriends />
                    <YouMayKnow />
                </div>
            </div>
        </Container>
    );
};

export default Friends;