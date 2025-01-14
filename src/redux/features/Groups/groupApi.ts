import { baseApi } from "@/redux/Api/baseApi";


const groupApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // makePayment: builder.mutation({
    //   query: (paymentData) => ({
    //     url: "/payment/create-payment",
    //     method: "POST",
    //     body: paymentData,
    //   }),
    //   invalidatesTags: ["payments"]
    // }),

    getAllGroups: builder.query({
      query: () => ({
        method: "GET",
        url: "/group",
      }),
      providesTags : ["groups"]
    }),
    

  }),
});

export const { useGetAllGroupsQuery} = groupApi;
