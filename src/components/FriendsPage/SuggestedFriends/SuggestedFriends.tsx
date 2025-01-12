import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";

const SuggestedFriends = () => {
    return (
        <FriendPageContainer title="Suggested For You" >
            <FriendCard variant="Friend" />
        </FriendPageContainer>
    );
};

export default SuggestedFriends;