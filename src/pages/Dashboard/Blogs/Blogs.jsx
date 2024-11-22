import AddBlogModal from "@/pages/component/AddBlogModal"
import BlogCard from "@/pages/home/Blogs/BlogCard"
import { useGetAllBlogsQuery } from "@/redux/featuresApi/blog/blogApi"
import Spinner from "@/UtilsFeatures/Spinner"





const Blogs = () => {
  const { data: blogsData, isLoading } = useGetAllBlogsQuery({})

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='p-4 lg:p-8'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-semibold text-gray-800'>My Blogs</h1>
        <AddBlogModal />
      </div>

      <div className='h-1 w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 my-6'></div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogsData?.data?.map((post, index) => (
          <BlogCard key={post?._id} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
