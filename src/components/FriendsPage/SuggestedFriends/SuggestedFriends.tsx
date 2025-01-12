import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";

const SuggestedFriends = () => {
    return (
        <FriendPageContainer title="Suggested For You" >
            <FriendCard />
        </FriendPageContainer>
    );
};

export default SuggestedFriends;