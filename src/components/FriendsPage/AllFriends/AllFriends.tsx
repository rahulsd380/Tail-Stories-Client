import AllFriendCard from "./AllFriendCard";

const AllFriends = () => {
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <h1 className="text-primary-10/90 text-lg font-medium">Your All Friends</h1>

            <div className="grid grid-cols-4 gap-3">
                <AllFriendCard />
            </div>
        </div>
    );
};

export default AllFriends;