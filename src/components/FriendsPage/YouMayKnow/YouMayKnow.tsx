import FriendPageContainer from "@/components/Reusable/FriendPageContainer";
import FriendCard from "../AllFriends/FriendCard";
import { useGetAllUsersQuery } from "@/redux/features/Auth/authApi";
import { TUser } from "@/components/Home/People/user.types";

const YouMayKnow = () => {
    const { data: allUsers } = useGetAllUsersQuery({});
    return (
        <FriendPageContainer title="People You may Know" >
            {allUsers?.data?.map((user: TUser) => 
                <FriendCard variant="Friend" key={user._id} {...user} />
            )}
        </FriendPageContainer>
    );
};

export default YouMayKnow;