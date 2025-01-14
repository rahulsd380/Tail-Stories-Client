import Container from "@/components/Container/Container";
import Profile from "../_components/Profile/Profile";
import People from "@/components/Home/People/People";
import AllGroups from "@/components/GroupsPage/AllGroups/AllGroups";

const Groups = () => {
    return (
        <Container>
            <div className="flex mt-5 gap-5 font-Lato h-[calc(100vh-40px)]">
                <div className="w-[25%] overflow-y-auto scrollbar-hide hidden lg:flex flex-col gap-4">
                    <Profile />
                    <People />
                </div>
                <div className="w-full lg:w-[75%]  flex flex-col gap-5 overflow-y-auto scrollbar-hide">
                    <AllGroups />
                </div>
            </div>
        </Container>
    );
};
export default Groups;