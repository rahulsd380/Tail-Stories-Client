/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { setUser } from '../features/Auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://tail-stories-server.vercel.app/api/v1',
  credentials : 'include',
  prepareHeaders : (headers, {getState}) => {
    const token = (getState() as RootState).auth.token;

    if(token){
      headers.set('authorization', `${token}`);
    }
    return headers; 
  }
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions) : Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);

  if(result.error?.status === 401){
    const res = await fetch('https://tail-stories-server.vercel.app/api/v1/auth/refresh-token', {
      credentials : 'include'
    });

    const data = await res.json();
    console.log(data);
    const user = (api.getState() as RootState).auth.user
    api.dispatch(
      setUser({
        user,
        token : data?.data?.accessToken
      })
    )
  }

  return result;
}

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["posts", "users", "payments"],
  endpoints: () => ({}),
});

// export const { } = baseApi;