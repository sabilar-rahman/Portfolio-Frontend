import { baseApi } from "@/redux/baseApi"


const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => {
        return {
          url: '/project/get-all',
          method: 'GET'
        }
      },
      transformResponse: (response) => {
        return {
          data: response.data
        }
      },
      providesTags: ['project']
    }),
    getSingleProject: builder.query({
      query: (params) => {
        return {
          url: `/project/get-single/${params}`,
          method: 'GET'
        }
      },
      transformResponse: (response) => {
        return {
          data: response.data
        }
      },
      providesTags: ['project']
    }),
    addProject: builder.mutation({
      query: (payload) => {
        return {
          url: `/project/create-project`,
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['project']
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
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery
} = projectApi
