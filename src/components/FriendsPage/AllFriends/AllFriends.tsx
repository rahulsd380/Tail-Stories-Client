"use client"
import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "./FriendCard";
import { Dispatch, SetStateAction } from "react";
import { useGetAllUsersQuery } from "@/redux/features/Auth/authApi";
import { TUser } from "@/components/Home/People/user.types";


const AllFriends = ({friendTab, setFriendTab} : {friendTab: "All Friends" | "Friend Requests", setFriendTab :Dispatch<SetStateAction<"All Friends" | "Friend Requests">>}) => {
    const {data:allUsers} = useGetAllUsersQuery({});
    
    return (
        <FriendPageContainer title="Your All Friends" friendTab={friendTab} setFriendTab={setFriendTab} >
            {
            allUsers?.data?.map((user:TUser) => 
            <FriendCard variant="Friend" key={user?._id} {...user}/>
            )
          }
        </FriendPageContainer>
    );
};

export default AllFriends;