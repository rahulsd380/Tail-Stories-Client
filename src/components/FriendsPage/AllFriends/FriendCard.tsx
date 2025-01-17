import Image from "next/image";
import { ICONS } from "../../../../public";
import { IoPersonAdd } from "react-icons/io5";
import { useSendFriendRequestMutation } from "@/redux/features/Auth/authApi";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/Auth/authSlice";
import { useState } from "react";
import { TLoggedInUser } from "@/components/Home/Navbar/Navbar";
import { TUser } from "@/components/Home/People/user.types";

type VariantType = "Friend" | "Request";

interface FriendCardProps extends Partial<TUser> {
  variant: VariantType;
}

const FriendCard: React.FC<FriendCardProps> = ({
  variant,
  name,
  occupation,
  _id,
  profilePicture,
  friendReq,
  friends
}) => {
  const user = useAppSelector(selectCurrentUser) as TLoggedInUser;
  const [sendFriendRequest, { isLoading: isSendingReq }] = useSendFriendRequestMutation();
  const [requestSent, setRequestSent] = useState(false);

  const isRequestSent = friendReq?.received?.some(req => req.friendId === user?.userId && req.status === "pending");
  const isAlreadyFriend = friends?.some((id: string) => id === user?.userId);

  const handleSendFriendReq = async () => {
    try {
      const response = await sendFriendRequest(_id).unwrap();
      console.log(response);
      if (response?.message === "Friend request sent successfully") {
        setRequestSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-primary-70/40 border rounded-xl py-3 px-2 h-[260px] flex flex-col items-center justify-between">
      <div className="size-24 rounded-full">
        <Image
          src={profilePicture ? profilePicture : ICONS.user}
          alt=""
          width={96}
          height={96}
          className="size-24 rounded-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-primary-10/90 text-lg font-semibold text-center">{name}</h1>
        <p className="text-primary-80 text-sm text-center mt-[3px]">{occupation ? occupation : "No Designation Added"}</p>
      </div>

      {variant === "Friend" ? (
        isAlreadyFriend ? (
          <button
            disabled
            className="flex items-center px-4 py-[6px] border border-primary-20 justify-center rounded-3xl w-full text-primary-20 bg-gray-300 cursor-not-allowed"
          >
            Already Friend
          </button>
        ) : isRequestSent ? (
          <button
            disabled
            className="flex items-center px-4 py-[6px] border border-primary-20 justify-center rounded-3xl w-full text-primary-20 bg-gray-300 cursor-not-allowed"
          >
            Request Sent
          </button>
        ) : (
          <button
            onClick={handleSendFriendReq}
            className="flex items-center px-4 py-[6px] border border-primary-20 justify-center rounded-3xl w-full text-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 font-semibold"
          >
            {isSendingReq ? (
              <span>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-primary-20 animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#d1d1d1"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <IoPersonAdd />
                {requestSent ? "Request Sent" : "Connect"}
              </span>
            )}
          </button>
        )
      ) : (
        <div className="flex items-center gap-3 w-full">
          <button className="px-4 py-[6px] border border-primary-20 rounded-3xl w-full text-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 font-semibold">
            Deny
          </button>
          <button className="px-4 py-[6px] rounded-3xl w-full bg-primary-20 hover:bg-primary-20/90 text-white transition duration-300 font-semibold">
            Accept
          </button>
        </div>
      )}
    </div>
  );
};

export default FriendCard;
