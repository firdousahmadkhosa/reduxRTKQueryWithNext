// src/provider-old/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "api/login",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "api/register",
        method: "POST",
        body: newUser,
      }),
    }),
    getUser: builder.query({
      query: () => "/user",
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserQuery,
  useLogoutMutation,
} = authApi;
