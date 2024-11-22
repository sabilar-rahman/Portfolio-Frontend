import { baseApi } from "@/redux/baseApi"


const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => {
        return {
          url: '/blog/get-all',
          method: 'GET'
        }
      },
      transformResponse: (response) => {
        return {
          data: response.data
        }
      },
      providesTags: ['blog']
    }),
    getSingleBlog: builder.query({
      query: (params) => {
        return {
          url: `/blog/get-single/${params}`,
          method: 'GET'
        }
      },
      transformResponse: (response) => {
        return {
          data: response.data
        }
      },
      providesTags: ['blog']
    }),
    addBlog: builder.mutation({
      query: (payload) => {
        return {
          url: `/blog/create-blog`,
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['blog']
    })
    // updatePost: builder.mutation({
    //   query: (payload) => {
    //     return {
    //       url: `/post/${payload.id}`,
    //       method: 'PUT',
    //       body: payload.data
    //     }
    //   },
    //   invalidatesTags: ['posts']
    // }),
    // deletePost: builder.mutation({
    //   query: (payload) => {
    //     return {
    //       url: `/post/${payload.id}`,
    //       method: 'DELETE'
    //     }
    //   },
    //   invalidatesTags: ['posts']
    // })
  })
})

export const {
  useAddBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery
} = blogApi
