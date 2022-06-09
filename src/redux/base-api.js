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
  tagTypes: ["User"],
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
      invalidatesTags: ["User"],
    }),
    getCurrentUser: builder.query({
      query() {
        return {
          url: `/users/current`,
          method: "GET",
        };
      },
      providesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query(body) {
        return {
          url: `/users/update`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLoginMutation,
  useFetchCurrentUserMutation,
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} = baseApi;
