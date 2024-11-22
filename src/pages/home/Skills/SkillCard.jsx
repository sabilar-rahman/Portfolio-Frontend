import { motion } from 'framer-motion'
const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105'
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}>
      <img src={skill?.logo} alt={skill?.name} className='w-16 h-16 mb-4' />
      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
        {skill?.name}
      </h3>
      <span className='text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full'>
        {skill?.category}
      </span>
    </motion.div>
  )
}

export default SkillCard
