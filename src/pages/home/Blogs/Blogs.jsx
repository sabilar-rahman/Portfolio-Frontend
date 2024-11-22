
import { useGetAllBlogsQuery } from '@/redux/featuresApi/blog/blogApi'
import Spinner from '@/UtilsFeatures/Spinner'
import { motion } from 'framer-motion'
import BlogCard from './BlogCard'





const Blogs = () => {
  const { data: blogsData, isLoading } = useGetAllBlogsQuery({})

  if (isLoading) {
    return <Spinner />
  }
  return (
    <section className='pb-20 bg-gray-100' id='blog'>
      <div className='container mx-auto px-4'>
        <div className='pt-10'>
          <motion.h2
            className='text-4xl font-extrabold text-center text-gray-800 mb-12'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Blogs
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogsData?.data?.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
      {/* <Divider /> */}
    </section>
  )
}

export default Blogs
