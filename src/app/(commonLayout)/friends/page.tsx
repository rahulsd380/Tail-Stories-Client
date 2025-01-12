import Container from "@/components/Container/Container";
import Profile from "../_components/Profile/Profile";
import People from "@/components/Home/People/People";
import AllFriends from "@/components/FriendsPage/AllFriends/AllFriends";

const Friends = () => {
    return (
        <Container>
            <div className="flex mt-5 gap-10 font-Lato">
                <div className="w-[25%] overflow-y-auto scrollbar-hide hidden lg:flex flex-col gap-4">
                    <Profile />
                    <People />
                </div>
                <div className="w-[75%]">
                        <AllFriends />
                </div>
            </div>
        </Container>
    );
};

export default Friends;