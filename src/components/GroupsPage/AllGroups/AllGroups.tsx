"use client"
import { useGetAllGroupsQuery } from "@/redux/features/Groups/groupApi";
import GroupCard from "./GroupCard";


export type TGroup = {
    _id: string;
    name: string;
    createdAt: Date;
    members: string[];
    logo: string;
    coverImage: string;
    tagline: string;
};


const AllGroups = () => {
    const { data: allGroups } = useGetAllGroupsQuery({});
    console.log(allGroups);
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <h1 className="text-primary-10/90 text-lg font-medium capitalize">Groups You May like To Join</h1>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
                {
                    allGroups?.data?.map((group: TGroup) =>
                        <GroupCard key={group?._id} {...group} />
                    )
                }
            </div>
        </div>
    );
};


export default AllGroups;