import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://clickstorm-api.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    registration: builder.mutation({
      query({ username, password }) {
        return {
          url: `/users/registration`,
          method: "POST",
          body: { username, password },
        };
      },
    }),
    login: builder.mutation({
      query({ username, password }) {
        return {
          url: `/users/login`,
          method: "POST",
          body: { username, password },
        };
      },
    }),
    fetchCurrentUser: builder.mutation({
      query() {
        return {
          url: `/users/current`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useFetchCurrentUserMutation,
} = baseApi;
