import { ReactNode } from "react";

const FriendPageContainer = ({ title, children, isFriendRequest=false, grid="grid-cols-4" }: { title: string, children: ReactNode, isFriendRequest?:boolean, grid?:string }) => {
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
            <h1 className="text-primary-10/90 text-lg font-medium capitalize">{title}</h1>
            {
                isFriendRequest ?
                <button className="text-primary-20 hover:underline text-lg font-medium capitalize">See All Friends</button>
                :
                ""
            }
            
            </div>
            <div className={`grid gap-3 ${grid}`}>
                {children}
            </div>
        </div>
    );
};

export default FriendPageContainer;