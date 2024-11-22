
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import moment from 'moment'

const BlogCard = ({ post }) => {
  const formattedDate = post?.createdAt
    ? moment(post.createdAt).format('YYYY-MM-DD')
    : ''
  return (
    <motion.div
      className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}>
      <figure className='relative h-48 overflow-hidden'>
        <motion.img
          src={post?.coverImage}
          alt={post?.title}
          className='w-full h-full object-cover'
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className='absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <span className='text-white text-sm font-medium'>
            {formattedDate}
          </span>
        </motion.div>
      </figure>
      <div className='card-body'>
        <motion.h2
          className='card-title text-2xl font-bold text-primary mb-2'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          {post?.title}
        </motion.h2>
        <motion.p
          className='text-base-content opacity-70 mb-4 line-clamp-2'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          {`${post.description.slice(0, 100)}...`}
        </motion.p>
        <motion.div
          className='flex flex-wrap gap-2 mb-4'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}>
          {post?.tags?.map((tag, index) => (
            <motion.span
              key={index}
              className='badge badge-primary badge-outline shadow-md shadow-gray-400'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}>
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <div className='card-actions justify-between items-center'>
          <motion.span
            className='text-sm text-base-content opacity-70'
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            By {post?.author}
          </motion.span>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            <Link
              to={`/blogDetails/${post?._id}`}
              className='btn btn-primary btn-sm'>
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard
