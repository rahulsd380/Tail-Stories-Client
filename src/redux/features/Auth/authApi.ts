import { baseApi } from "@/redux/Api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    signup: builder.mutation({
      query: (userInfo) => ({
        method: "POST",
        url: "/auth/signup",
        body: userInfo,
      }),
      // invalidatesTags : ["products"]
    }),

    getMe: builder.query({
      query: () => ({
        method: "GET",
        url: "/users/me",
      }),
      // invalidatesTags : ["products"]
    }),

    getAllUsers: builder.query({
      query: () => ({
        method: "GET",
        url: "/users",
      }),
      // invalidatesTags : ["products"]
    }),

    getUserById: builder.query({
      query: (userId) => ({
        method: "GET",
        url: `/users/${userId}`,
      }),
      providesTags: ["users"]
    }),

    getmyPosts: builder.query({
      query: (authorId) => ({
        method: "GET",
        url: `users/my-posts/${authorId}`,
      }),
      // invalidatesTags : ["products"]
    }),

    updateProfile: builder.mutation({
      query: (profileUpdatedData) => ({
        method: "PUT",
        url: `/users/me`,
        body: profileUpdatedData,
      }),
      invalidatesTags: ["users"]
    }),

    followUser: builder.mutation({
      query: (userId) => ({
        method: "PUT",
        url: `/users/follow/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),

    unfollowUser: builder.mutation({
      query: (userId) => ({
        method: "PUT",
        url: `/users/unfollow/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),

    sendFriendRequest: builder.mutation({
      query: (userId) => ({
        method: "PUT",
        url: `/users/friend-request/send/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),

    acceptFriendRequest: builder.mutation({
      query: (userId) => ({
        method: "PUT",
        url: `/users/friend-request/accept/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),

    declineFriendRequest: builder.mutation({
      query: (userId) => ({
        method: "PUT",
        url: `/users/friend-request/decline/${userId}`,
      }),
      invalidatesTags: ["users"],
    }),

    sharePost: builder.mutation({
      query: (postId) => ({
        method: "PUT",
        url: `/users/share/${postId}`,
      }),
      invalidatesTags: ["posts"],
    }),

    joinGroup: builder.mutation({
      query: (groupId) => ({
        method: "PUT",
        url: `/users/join-group/${groupId}`,
      }),
      invalidatesTags: ["groups"],
    }),

    changeUserRoleToAdmin: builder.mutation({
      query: (userId) => ({
        url: `/users/make-admin/${userId}`,
        method: 'PUT',
      }),
      invalidatesTags : ["users"]
    }),

  changeUserRoleToUser: builder.mutation({
      query: (userId) => ({
        url: `/users/make-user/${userId}`,
        method: 'PUT',
      }),
      invalidatesTags : ["users"]
    }),

    deleteUser: builder.mutation({
      query : (userId) => ({
          url : `/users/delete-user/${userId}`,
          method : "DELETE",
      }),
      invalidatesTags : ["users"]
  }),

    forgetPassword: builder.mutation({
      query : (email) => ({
          url : `/auth/forget-password`,
          method : "POST",
          body: email,
      }),
      invalidatesTags : ["users"]
  }),

    resetPassword: builder.mutation({
      query : ({token, resetPasswordData}) => ({
          url : `/auth/reset-password`,
          method : "POST",
          headers: {
            Authorization: `${token}`,
          },
          body: resetPasswordData,
      }),
      invalidatesTags : ["users"]
  }),
    

  }),
});

export const { useLoginMutation, useSignupMutation, useGetMeQuery, useUpdateProfileMutation, useGetmyPostsQuery, useGetUserByIdQuery, useFollowUserMutation, useUnfollowUserMutation, useGetAllUsersQuery, useChangeUserRoleToAdminMutation, useChangeUserRoleToUserMutation, useDeleteUserMutation, useForgetPasswordMutation, useResetPasswordMutation, useSendFriendRequestMutation, useAcceptFriendRequestMutation, useDeclineFriendRequestMutation, useSharePostMutation, useJoinGroupMutation } = authApi;
