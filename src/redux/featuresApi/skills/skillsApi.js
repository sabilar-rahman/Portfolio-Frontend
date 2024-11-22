import { baseApi } from "@/redux/baseApi"


const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkills: builder.query({
      query: () => {
        return {
          url: '/skill/get-all',
          method: 'GET'
        }
      },
      transformResponse: (response) => {
        return {
          data: response.data
        }
      },
      providesTags: ['skill']
    }),
    addSkill: builder.mutation({
      query: (payload) => {
        return {
          url: `/skill/create-skill`,
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['skill']
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

export const { useGetAllSkillsQuery, useAddSkillMutation } = skillApi
