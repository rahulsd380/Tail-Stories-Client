import { ReactNode } from "react";

const FriendPageContainer = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="bg-white p-4 shadow w-full rounded-xl flex flex-col gap-3">
            <h1 className="text-primary-10/90 text-lg font-medium">{title}</h1>
            <div className="grid grid-cols-4 gap-3">
                {children}
            </div>
        </div>
    );
};

export default FriendPageContainer;