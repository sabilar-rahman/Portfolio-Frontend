import { baseApi } from "@/redux/baseApi"


const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExperiences: builder.query({
      query: () => {
        return {
          url: '/experience/get-all',
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
    getSingleExperience: builder.query({
      query: (params) => {
        return {
          url: `/experience/get-single/${params}`,
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
    addExperience: builder.mutation({
      query: (payload) => {
        return {
          url: `/experience/create-experience`,
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['experience']
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
  useAddExperienceMutation,
  useGetAllExperiencesQuery,
  useGetSingleExperienceQuery
} = experienceApi
