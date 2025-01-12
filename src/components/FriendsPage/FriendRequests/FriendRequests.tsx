import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";


const FriendRequests = () => {
    return (
        <FriendPageContainer title="Friend Requests" grid="grid-cols-3" >
            <FriendCard variant="Friend Request" />
        </FriendPageContainer>
    );
};

export default FriendRequests;