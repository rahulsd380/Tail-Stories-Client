import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";

const YouMayKnow = () => {
    return (
        <FriendPageContainer title="People You may Know" >
            <FriendCard variant="Friend" />
        </FriendPageContainer>
    );
};

export default YouMayKnow;