import { motion } from 'framer-motion'
const Divider = () => {
  return (
    <div className='flex items-center justify-center my-10'>
      <motion.hr
        className='w-1/4 border-t-2 border-gray-400'
        initial={{ width: 0 }}
        animate={{ width: '25%' }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
      <motion.span
        className='mx-4 text-gray-600 text-lg font-semibold'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}>
        ★
      </motion.span>
      <motion.hr
        className='w-1/4 border-t-2 border-gray-400'
        initial={{ width: 0 }}
        animate={{ width: '25%' }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </div>
  )
}

export default Divider
