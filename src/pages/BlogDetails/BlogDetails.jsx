import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa'
import { motion } from 'framer-motion'

import moment from 'moment'

import { useGetSingleBlogQuery } from '@/redux/featuresApi/blog/blogApi'
import Spinner from '@/UtilsFeatures/Spinner'

const BlogDetails = () => {
  const { id } = useParams()

  const { data: blogData } = useGetSingleBlogQuery(id)
  const blog = blogData?.data

  const formattedDate = blog?.createdAt
    ? moment(blog.createdAt).format('YYYY-MM-DD')
    : ''

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!blogData) {
    return <Spinner />
  }

  return (
    <motion.div
      className='min-h-screen bg-gradient-to-b from-base-200 to-base-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='container mx-auto px-4 py-32'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          <Link
            to='/'
            className='btn btn-ghost mb-8 inline-flex items-center hover:bg-base-300'>
            <FaArrowLeft className='mr-2' /> Back to Blogs
          </Link>
        </motion.div>

        <motion.div
          className='bg-base-100 shadow-2xl rounded-lg overflow-hidden'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          <div className='relative h-64 md:h-96'>
            <motion.img
              src={blog?.coverImage}
              alt={blog?.title}
              className='w-full h-full object-cover'
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center'>
              <motion.h1
                className='text-4xl md:text-6xl font-bold text-white text-center px-4 max-w-4xl'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}>
                {blog?.title}
              </motion.h1>
            </div>
          </div>
          <div className='p-6 md:p-10'>
            <motion.div
              className='flex flex-wrap items-center justify-between mb-6 text-sm text-base-content opacity-70'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}>
              <div className='flex items-center mb-2 md:mb-0'>
                <FaUser className='mr-2' />
                <span>{blog?.author}</span>
              </div>
              <div className='flex items-center mb-2 md:mb-0'>
                <FaCalendarAlt className='mr-2' />
                <span>{formattedDate}</span>
              </div>
              <div className='flex items-center'>
                <FaTags className='mr-2' />
                <div className='flex flex-wrap gap-2'>
                  {blog?.tags?.map((tag, index) => (
                    <motion.span
                      key={index}
                      className='badge badge-primary badge-outline shadow-md shadow-gray-400'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}>
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className='prose prose-lg max-w-none'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}>
              <div dangerouslySetInnerHTML={{ __html: blog?.mainContent }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BlogDetails
