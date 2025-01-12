import GroupCard from "./GroupCard";

const AllGroups = () => {
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <h1 className="text-primary-10/90 text-lg font-medium capitalize">Groups You May like To Join</h1>
            <div className="grid grid-cols-2 gap-5">
                <GroupCard/>
            </div>
        </div>
    );
};

export default AllGroups;