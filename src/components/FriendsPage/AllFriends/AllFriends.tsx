import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "./FriendCard";


const AllFriends = () => {
    return (
        <FriendPageContainer title="Your All Friends" >
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
            <FriendCard variant="Friend" />
        </FriendPageContainer>
    );
};

export default AllFriends;