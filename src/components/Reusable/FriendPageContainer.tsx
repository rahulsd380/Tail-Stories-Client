"use client"
import { ReactNode, Dispatch, SetStateAction } from "react";

type TFriendPageContainer = {
    title: string;
    children: ReactNode;
    grid?: string;
    setFriendTab?: Dispatch<SetStateAction<"All Friends" | "Friend Requests">>;
    friendTab?: "All Friends" | "Friend Requests" | undefined;
    isTabVisible? : boolean;
}
const FriendPageContainer: React.FC<TFriendPageContainer> = ({ title, children, grid = "grid-cols-4", setFriendTab, friendTab, isTabVisible=false }) => {
    console.log(friendTab)
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <h1 className="text-primary-10/90 text-lg font-medium capitalize">{title}</h1>
                {
                    isTabVisible && 
                
                <button onClick={() => setFriendTab && setFriendTab(
                    friendTab === "All Friends" ? "Friend Requests" : "All Friends"
                )} className="text-primary-20 hover:underline text-lg font-medium capitalize">
                    {
                        friendTab === "All Friends" ?
                            "See Friend Requests"
                            :
                            "See All Friends"
                    }
                </button>
                }

            </div>
            <div className={`grid gap-3 ${grid}`}>
                {children}
            </div>
        </div>
    );
};

export default FriendPageContainer;