import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";
import { Dispatch, SetStateAction } from "react";


const FriendRequests = ({friendTab, setFriendTab} : {friendTab: "All Friends" | "Friend Requests", setFriendTab :Dispatch<SetStateAction<"All Friends" | "Friend Requests">>}) => {
    return (
        <FriendPageContainer title="Friend Requests" grid="grid-cols-3" friendTab={friendTab} setFriendTab={setFriendTab} >
            <FriendCard variant="Friend Request" />
        </FriendPageContainer>
    );
};

export default FriendRequests;