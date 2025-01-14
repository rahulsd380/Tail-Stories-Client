"use client";
import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "./FriendCard";
import { Dispatch, SetStateAction } from "react";
import { useGetAllUsersQuery } from "@/redux/features/Auth/authApi";
import { TUser } from "@/components/Home/People/user.types";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { TLoggedInUser } from "@/components/Home/Navbar/Navbar";

const AllFriends = ({ friendTab, setFriendTab }: { friendTab: "All Friends" | "Friend Requests"; setFriendTab: Dispatch<SetStateAction<"All Friends" | "Friend Requests">>; }) => {
    const { data: allUsers } = useGetAllUsersQuery({});
    const user = useAppSelector(selectCurrentUser) as TLoggedInUser;
    const userId = user?.userId

    const friendsList = allUsers?.data?.filter((user: TUser) =>
        user?.friends.includes(userId)
    );

    return (
        <FriendPageContainer title="Your All Friends" friendTab={friendTab} setFriendTab={setFriendTab} isTabVisible={true} >
            {friendsList?.map((user: TUser) => 
                <FriendCard variant="Friend" key={user._id} {...user} />
            )}
        </FriendPageContainer>
    );
};

export default AllFriends;
