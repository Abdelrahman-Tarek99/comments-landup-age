import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICommentCreation, ICommentsResponse } from "./CommentsInterface";

export const BASEURL= "http://localhost:1337/api/comments"
export const BASELOCALHOST= "http://localhost:1337"

export const CommentsApi = createApi({
  reducerPath: "CommentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    headers:{
      "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
    }
  }),
  tagTypes: ['Comments'],
  refetchOnFocus: false,
  endpoints: (builder) => ({
    getComments: builder.query<ICommentsResponse, void>({ query: () => `?populate=*` ,
      providesTags: [{ type: 'Comments' }],
    }),
    getCommentById: builder.query({
      query: (id: number) => `${id}`,
    }),
    createComment: builder.mutation({
      query: (newPost:ICommentCreation) => ({
        url: "",
        method: "POST",
        body: newPost,
      }),
    }),
    deleteComment: builder.mutation({
      query: (id: number) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    editComment: builder.mutation({
      query: (newPost: ICommentCreation) => ({
        url: `/${newPost.id}`,
        method: "PUT",
        body: newPost,
      }),
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentByIdQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
} = CommentsApi;